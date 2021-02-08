import { NextApiRequest, NextApiResponse } from 'next'

export default async function product(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<any> {
  response.send({ data: 'pedro' })
}
