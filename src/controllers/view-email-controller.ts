import { Request, Response, NextFunction } from 'express'
import { container } from '../config/container'
import FindEmailByIdQueryHandler from '../queries/handlers/find-email-byId-query-handler'
import EmailNotFoundError from '../errors/email-not-found-error'

const findEmailByIdQueryHandler: FindEmailByIdQueryHandler = container.get(FindEmailByIdQueryHandler)

/**
 * GET /emails/{id}
 * View email
 */
export default async (req: Request, res: Response) => {

  const id: string = req.params.id

  try {
    const email = await findEmailByIdQueryHandler.handle({ emailId: id })
    res.send(email)
  } catch (e) {
    if (e instanceof EmailNotFoundError) {
      res.send(404)
    }
  }

}
