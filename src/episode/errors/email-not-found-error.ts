class EmailNotFoundError extends Error {
  constructor () {
    super('Email not found!')
  }
}

export default EmailNotFoundError
