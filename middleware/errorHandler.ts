import { NextApiRequest, NextApiResponse } from 'next'

const errorHandler = (
  error: any,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.error('info:', error)
  
  res.status(500).json({ error: 'server error' })
}

export default errorHandler
