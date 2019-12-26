export interface IEmailManager {
  send (to: string, subject: string, content: string): boolean
}
