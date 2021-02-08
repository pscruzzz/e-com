import api, { apiPrice } from '../../../services/api'
import useCollections from '../../../hooks/useCollections'

import { NextApiRequest, NextApiResponse } from 'next'

interface ICollectionResponseData {
  Page: number
  Size: number
  TotalRows: number
  TotalPage: number
  Data: {
    ProductId: number
    SkuId: number
    SubCollectionId: number
    Position: number
    ProductName: string
    SkuImageUrl: string
  }[]
}

interface ICollectionDetailsResponseData {
  Id: number
  Name: string
  Description: string | null
  Searchable: boolean
  Highlight: boolean
  DateFrom: string
  DateTo: string
  TotalProducts: number
}

interface IResponse {
  collectionId: number
  Name: string
  ProductName: string
  SkuId: number
  ProductDescription: string
  SkuImageUrl: string
  Price: number
}

export default async function collections(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  const {
    query: { id }
  } = request

  if (typeof id === 'string') {
    const formattedResponseJson = await useCollections(id)
    response.send(formattedResponseJson)
  } else {
    response.send('Parameter needs to be a string')
  }
}
