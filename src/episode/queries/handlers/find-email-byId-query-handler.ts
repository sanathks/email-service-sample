import { IQueryHandle } from './query-handle-interface'
import { IFindEmailByIdQuery } from '../find-email-byId-query'
import { inject, injectable } from 'inversify'
import { IEmailRepository } from '../../repositories/email-repository-interface'

@injectable()
class FindEmailByIdQueryHandler implements IQueryHandle {

  private _emailRepository: IEmailRepository

  constructor (
        @inject(Symbol.for('EmailRepositoryInterface')) emailRepository: IEmailRepository
    ) {
    this._emailRepository = emailRepository
  }

  public async handle (query: IFindEmailByIdQuery): Promise<any> {
    return this._emailRepository.get(query.emailId)
  }

}

export default FindEmailByIdQueryHandler
