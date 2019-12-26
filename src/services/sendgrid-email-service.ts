import { IEmailManager } from './email-manager-interface'
import 'reflect-metadata'
import { injectable } from 'inversify'
import mail from '@sendgrid/mail'
import { FROM } from '../config/mail'

@injectable()
class SendgridEmailService implements IEmailManager {

  public send (to: string, subject: string, content: string): boolean {

    const msg = {
      to,
      from: FROM,
      subject,
      text: content,
      html: content
    }

    mail.send(msg)

    return false
  }

}

export default SendgridEmailService
