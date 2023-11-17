import { UserModel } from '../models/UserModel';

export class UserRepository {
  static async findUserByEmail(email: string) {
    return await UserModel.query().select('*').where('email', email);
  }
}
