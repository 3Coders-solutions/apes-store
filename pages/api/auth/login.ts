// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { login } from 'lib/auth'
import errorHandler from 'middleware/errorHandler'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).json({ error: 'Method not allowed' })
  const { email, password } = req.body
  try {
    const [user, error] = await login(email, password)
    if (error) throw error
    res.status(200).json(user)
  } catch (error) {
    errorHandler(error, req, res)
  }
}
