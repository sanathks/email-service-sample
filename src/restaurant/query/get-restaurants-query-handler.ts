import { IQueryHandle } from '../../episode/queries/handlers/query-handle-interface'

export class GetRestaurantsQueryHandler implements IQueryHandle {
  public async handle (query: any): Promise<any> {
    return undefined
  }

}
