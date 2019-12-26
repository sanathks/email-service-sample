import { Request, Response } from 'express'
import errorMessageBuilder from '../helpers/error-message-builder'
import { SendEmailCommandHandler } from '../commands/handlers/send-email-command-handler'
import { container } from '../config/container'

const sendEmailCommandHandler: SendEmailCommandHandler = container.get(SendEmailCommandHandler)

/**
 * POST /emails
 * Sending emails
 */
export default async (req: Request, res: Response) => {

  const errors = assert(req)

  if (errors) {
    res.status(422)
            .send(errors)
    return
  }

  const { to, content, subject } = req.body

  const { id, state } = await sendEmailCommandHandler.handle({ to, content, subject })

  res.send({ id, state })
}

/**
 * Payload validator
 *
 * @param req
 */
const assert = (req: Request) => {
  req.assert('to', 'Email is not valid').notEmpty().isEmail()
  req.assert('content', 'Content is required!').notEmpty()
  req.assert('subject', 'Subject is required!').notEmpty()

  const errors: Record<string, any> = req.validationErrors()

  if (!errors) {
    return
  }

  return errorMessageBuilder(errors)

}
