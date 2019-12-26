export interface ICommandHandle {
  handle (command: any): Promise<any>
}
