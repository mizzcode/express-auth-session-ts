import express, { Express } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import { Model } from 'objection';
import knex from 'knex';
import config from './config/knexfile';
import { UserController } from './controllers/UserController';
import path from 'path';
import session from 'express-session';

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), 'src', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  session({
    secret: 'cat',
    resave: false,
    saveUninitialized: false,
    cookie: { path: '/', secure: false, maxAge: 3_600_000 },
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src', 'views'));
// inisiasi express-session
app.set('trust proxy', 1); // trust first proxy

// connect db postgres client
Model.knex(knex(config.development));
// inisiasi controller
new UserController(app).init();

app.listen(port, () => {
  console.log(`app run on http://localhost:${port}`);
});
