function withErrorStack(err: any) {
  return err
}

export const logErrors = (err: any, req: any, res: any, next: any) => {
  console.log(err)
  next(err)
}

export const wrapErrors = (err: any, req: any, res: any, next: any) => {
  if (!err) {
    next(new Error(err))
  }

  next(err)
}

export const clientErrorHandler = (err: any, req: any, res: any, next: any) => {
  res.status(500).json(
    withErrorStack({
      statusCode: 500,
      error: 'API:',
      message: err,
      stack: '',
    }),
  )
}
