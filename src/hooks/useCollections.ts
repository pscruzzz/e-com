import api, { apiPrice } from '../services/api'

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

interface IFormattedResponseJson {
  collectionId: number
  Name: string
  ProductName: string
  SkuId: number
  ProductDescription: string
  SkuImageUrl: string
  Price: number
}

interface IResponse {
  data?: IFormattedResponseJson
  error?: string
}

export default async function useCollections(id: string): Promise<IResponse> {
  try {
    const collectionResponse = await api.get(
      `api/catalog/pvt/collection/${id}/products`
    )
    const collectionResponseData: ICollectionResponseData = await collectionResponse.data
    const { ProductName, SkuId, SkuImageUrl } = collectionResponseData.Data[0]

    const collectionDetailsResponse = await api.get(
      `api/catalog/pvt/collection/${id}`
    )
    const {
      Name,
      Id: collectionId
    }: ICollectionDetailsResponseData = await collectionDetailsResponse.data

    const skuResponse = await api.get(
      `api/catalog_system/pvt/sku/stockkeepingunitbyid/${SkuId}`
    )
    const { ProductDescription } = skuResponse.data

    const priceResponse = await apiPrice.get(`pricing/prices/${SkuId}`)
    const { basePrice, listPrice } = priceResponse.data

    const data = {
      collectionId,
      Name,
      ProductName,
      SkuId,
      ProductDescription,
      SkuImageUrl,
      Price: listPrice || basePrice
    }
    return { data }
  } catch {
    const error = 'Something went wrong, probably path variable is wrong'
    return { error }
  }
}
