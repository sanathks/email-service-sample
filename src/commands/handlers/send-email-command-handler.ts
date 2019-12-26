import { ICommandHandle } from './command-handle-interface'
import { ISendEmailCommand } from '../send-email-command'
import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { IEmailManager } from '../../services/email-manager-interface'
import { IEmailRepository } from '../../repositories/email-repository-interface'
import { EmailState } from '../../enums/email-state-enum'

@injectable()
export class SendEmailCommandHandler implements ICommandHandle {

  private _emailManager: IEmailManager
  private _emailRepository: IEmailRepository

  public constructor (
      @inject(Symbol.for('EmailManagerInterface')) emailManagerInterface: IEmailManager,
      @inject(Symbol.for('EmailRepositoryInterface')) emailRepository: IEmailRepository
    ) {
    this._emailManager = emailManagerInterface
    this._emailRepository = emailRepository
  }

  public async handle (command: ISendEmailCommand): Promise<any> {

    const email = {
      to: command.to,
      subject: command.subject,
      content: command.content,
      state: EmailState.QUEUED.toString()
    }

    if  (this.isDayTime()) {
      this._emailManager.send(email.to, email.subject, email.content)
      email.state = EmailState.SENT.toString()
    }

    return this._emailRepository.save(email)
  }

  private isDayTime (): boolean {
    const date = new Date()
    const h = date.getHours()

    // This time can be more to a config, to gain the flexibility
    return (h >= 8) && (h <= 17)
  }

}
