import * as mongoose from 'mongoose'

export interface Email {
  id?: string,
  to: string,
  subject: string,
  content: string,
  state: string
}

export const EmailSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  state: { type: String, required: true }
})

const EmailModel = mongoose.model<Email & mongoose.Document>('Email', EmailSchema)
export default EmailModel
