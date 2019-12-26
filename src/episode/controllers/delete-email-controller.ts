import { Request, Response, NextFunction } from 'express'
import { container } from '../../../config/container'
import { DeleteEmailCommandHandler } from '../commands/handlers/delete-email-command-handler'

const deleteEmailCommandHandler: DeleteEmailCommandHandler = container.get(DeleteEmailCommandHandler)

/**
 * GET /emails/{id}
 * View email
 */
export default (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id
  deleteEmailCommandHandler.handle({ emailId: id })
  res.send('Email deleting.....' + id)
}
