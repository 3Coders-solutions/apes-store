// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import { createUser, getUser } from '../../../lib/auth';
type Data = {
  password: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse//<Data>
) {
  if (req.method != "POST") return res.status(405).send("Method not allowed.");
  let { email, password } = req.body;
  let user = await getUser(email, password)
  res.status(200).json({ user })
}
