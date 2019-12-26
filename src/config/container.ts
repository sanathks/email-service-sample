import { Container } from 'inversify'
import { SendEmailCommandHandler } from '../commands/handlers/send-email-command-handler'
import { IEmailManager } from '../services/email-manager-interface'
import SendgridEmailService from '../services/sendgrid-email-service'
import { IEmailRepository } from '../repositories/email-repository-interface'
import EmailRepository from '../repositories/email-repository'
import FindEmailByIdQueryHandler from '../queries/handlers/find-email-byId-query-handler'
import { DeleteEmailCommandHandler } from '../commands/handlers/delete-email-command-handler'

const Symbols = {
  EmailManager: Symbol.for('EmailManagerInterface'),
  EmailRepositoryInterface: Symbol.for('EmailRepositoryInterface')
}

const container = new Container()
container.bind<IEmailManager>(Symbols.EmailManager).to(SendgridEmailService)
container.bind<IEmailRepository>(Symbols.EmailRepositoryInterface).to(EmailRepository)
container.bind<SendEmailCommandHandler>(SendEmailCommandHandler).toSelf()
container.bind<FindEmailByIdQueryHandler>(FindEmailByIdQueryHandler).toSelf()
container.bind<DeleteEmailCommandHandler>(DeleteEmailCommandHandler).toSelf()

export { container }
