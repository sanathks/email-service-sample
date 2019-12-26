import { Email } from '../models/email'

export interface IEmailRepository {
  save (email: Email): Promise<Email>
  get (id: string): Promise<Email>
  delete (id: string)
}
