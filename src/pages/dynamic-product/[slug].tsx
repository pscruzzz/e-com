import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'

import {
  Container,
  ProductBoard,
  StyledDiv,
  ProductProps
} from '../../styles/pages/Product'

import { FiChevronLeft } from 'react-icons/fi'

import CloudsSVG from '../../assets/CloudsSVG'

interface ICollectionData {
  collectionId: number
  Name: string
  ProductName: string
  SkuId: number
  ProductDescription: string
  SkuImageUrl: string
  Price: number
}

const Product: React.FC = () => {
  const router = useRouter()

  console.log(router.query.slug)

  const { data: collectionData } = useSWR(
    `../api/collections/${router.query.slug}`,
    async url => {
      const response = router.query.slug ? await axios.get(url) : undefined
      const data = await response.data

      return data
    }
  )

  console.log(collectionData)

  const buildTime = new Date().toUTCString()

  return (
    <Container>
      <Head>{`${router.query.slug} Collection`}</Head>
      <div className="wrapper">
        <header>
          <CloudsSVG />
          <span className="logo">e-COM</span>
        </header>
        <ProductBoard>
          <Link href="/">
            <div className="linkClass">
              <FiChevronLeft size={40} color={'#BEE6E6'} />
              <p>Go back home, son</p>
            </div>
          </Link>
          {collectionData && (
            <div className="imageDiv">
              <img
                src={collectionData?.SkuImageUrl}
                id={`${collectionData?.SkuId}`}
                alt={`${collectionData?.SkuId}`}
              />
            </div>
          )}
          <ProductProps>
            <h3 className="skuTitle">{collectionData?.ProductName}</h3>
            <p className="skuDescription">
              {collectionData?.ProductDescription}
            </p>
            {collectionData && (
              <>
                <h3 className="skuPrice">R$ {collectionData?.Price},00</h3>
                <Link href="/checkout">
                  <StyledDiv>Buy Now</StyledDiv>
                </Link>
              </>
            )}
          </ProductProps>
        </ProductBoard>
        <footer>
          <div className="buildTime">
            <p className="bold">Builded at</p>
            <p>{buildTime}</p>
          </div>
          <div className="developed">
            <p className="bold">Developed by</p>
            <p>Pedro Cruz</p>
          </div>
        </footer>
      </div>
    </Container>
  )
}

export default Product
