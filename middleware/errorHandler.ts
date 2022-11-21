import { NextApiRequest, NextApiResponse } from 'next'
import { ValidationError } from 'lib/errors'

const errorHandler = (
  error: any,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { name, message } = error
  // console.error('info:', error.message)
  console.error('Full error msg:\n', error.toString())
  if (error instanceof ValidationError) {
    res.status(400).json({ error: { name, message }})
  }
  else {
    res.status(500).json({ error: 'Unknown error' })
  }
}

export default errorHandler
