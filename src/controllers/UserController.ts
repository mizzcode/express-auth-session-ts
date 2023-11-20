import { Express, Request, Response } from 'express';
import * as argon2 from 'argon2';
import { UserService } from '../services/UserService';
import authMiddleware from '../middlewares/authMiddleware';

export class UserController {
  // define types
  app: Express;
  // construct
  constructor(app: Express) {
    this.app = app;
  }
  // inisiasi route
  init() {
    this.app.get('/', authMiddleware, this.index);
    this.app.get('/login', this.login);
    this.app.post('/login', this.postLogin);
    this.app.get('/logout', authMiddleware, this.logout);
  }

  index(req: Request, res: Response) {
    // @ts-expect-error not declared
    return res.render('index', { user: req.session.user });
  }

  login(_: Request, res: Response) {
    return res.render('login');
  }
  
  async postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserService.findUserByEmail(email);

      if (!(await argon2.verify(user[0].password, password))) {
        console.info('email or password is wrong!');
        return res.render('login');
      }

      console.info('success login');
      // @ts-expect-error not declared
      req.session.user = user;
      return res.redirect('/');
    } catch (err: any) {
      console.error(err);
      console.info('email or password is wrong');

      return res.render('login');
    }
  }

  logout(req: Request, res: Response) {
    // @ts-expect-error
    req.session.destroy();

    res.redirect('/login');
  }
}
