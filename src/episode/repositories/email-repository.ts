import { IEmailRepository } from './email-repository-interface'
import { injectable } from 'inversify'
import EmailModel, { Email } from '../models/email'
import EmailNotFoundError from '../errors/email-not-found-error'

@injectable()
class EmailRepository implements IEmailRepository {

  public async get (id: string): Promise<Email> {
    const email = await EmailModel.findById(id)

    if (!email) {
      throw new EmailNotFoundError()
    }

    return this._normalizer(email)
  }

  public async save (email: Email): Promise<Email> {
    const emailModel = new EmailModel(email)
    const newEmail = await emailModel.save()

    return this._normalizer(newEmail)
  }

  public async delete (id: string) {
    await EmailModel.deleteOne({ _id: id })
  }

  private _normalizer = ({ _id: id, to, subject, content, state }): Email => ({ id, to, subject, content, state })

}

export default EmailRepository
