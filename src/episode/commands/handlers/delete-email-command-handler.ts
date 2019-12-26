import { ICommandHandle } from './command-handle-interface'
import { IDeleteEmailCommand } from '../delete-email-command'
import { IEmailRepository } from '../../repositories/email-repository-interface'
import { inject, injectable } from 'inversify'

@injectable()
export class DeleteEmailCommandHandler implements ICommandHandle {

  private _emailRepository: IEmailRepository

  constructor (
        @inject(Symbol.for('EmailRepositoryInterface')) emailRepository: IEmailRepository
    ) {
    this._emailRepository = emailRepository
  }

  public async handle (command: IDeleteEmailCommand): Promise<any> {
    this._emailRepository.delete(command.emailId)
  }

}
