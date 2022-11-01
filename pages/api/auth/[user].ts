import { NextApiRequest, NextApiResponse } from 'next'
import { getUser } from 'lib/auth'
import errorHandler from 'middleware/errorHandler'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email } = req.body
    const [user, error] = await getUser(email)
    if (error) throw error
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    errorHandler(error, req, res)
  }
}