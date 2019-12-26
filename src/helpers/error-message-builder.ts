export default (errors: Record<string, any>) => {
  return errors.map(({ param, msg }) => {
    return {
      field: param,
      error: msg
    }
  })
}
