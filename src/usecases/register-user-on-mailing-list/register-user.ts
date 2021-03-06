import { RegisterUserResponse } from './register-user-response'
import { UserData } from '../../domain/user-data'

export interface RegisterUser {
  registerUserOnMailingList: (user: UserData) => Promise<RegisterUserResponse>
}
