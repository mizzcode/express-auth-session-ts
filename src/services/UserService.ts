import { UserRepository } from '../repository/UserRepository';

export class UserService {
  static findUserByEmail(email: string) {
    return UserRepository.findUserByEmail(email);
  }
}
