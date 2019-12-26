export interface IQueryHandle {
  handle (query: any): Promise<any>
}
