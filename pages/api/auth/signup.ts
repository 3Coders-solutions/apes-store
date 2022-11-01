// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from 'lib/auth'
import errorHandler from 'middleware/errorHandler'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).json({ error: 'Method not allowed' })
  const { name, surname, email, password, passwordConfirmation } = req.body
  
  try {
    if (password !== passwordConfirmation) throw new Error('Passwords do not match')
    const [user, error] = await createUser(req.body)
    if (error) throw error
    res.status(200).json(user)
  } catch (error) {
    errorHandler(error, req, res)
  }
}
