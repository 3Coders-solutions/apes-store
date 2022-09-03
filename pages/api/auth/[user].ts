import { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse//<Data>
) {
  const { user: pid } = req.query
  res.end(`Post: ${pid}`)
}