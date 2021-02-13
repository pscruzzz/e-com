import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import useCollections from '../../hooks/useCollections'

import {
  Container,
  ProductBoard,
  StyledDiv,
  ProductProps
} from '../../styles/pages/Product'

import { FiChevronLeft } from 'react-icons/fi'

import CloudsSVG from '../../assets/CloudsSVG'
import { GetStaticProps, GetStaticPaths } from 'next'

interface ICollectionData {
  collectionId: number
  Name: string
  ProductName: string
  SkuId: number
  ProductDescription: string
  SkuImageUrl: string
  Price: number
}

interface IProductProps {
  data: {
    collectionId: number
    Name: string
    ProductName: string
    SkuId: number
    ProductDescription: string
    SkuImageUrl: string
    Price: number
  }
  staticBuildTime: string
}

const Product: React.FC<IProductProps> = ({ data, staticBuildTime }) => {
  const router = useRouter()

  console.log(router.query.slug)

  if (router.isFallback) {
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
            <ProductProps></ProductProps>
          </ProductBoard>
          <footer>
            <div className="buildTime">
              <p className="bold">Builded at</p>
              <p>Loading...</p>
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

  const collectionData = data

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
            <h3 className="skuPrice">R$ {collectionData?.Price},00</h3>
            <Link href="/checkout">
              <StyledDiv>Buy Now</StyledDiv>
            </Link>
          </ProductProps>
        </ProductBoard>
        <footer>
          <div className="buildTime">
            <p className="bold">Builded at</p>
            <p>{staticBuildTime}</p>
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: '142' } }],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params

  const response = await useCollections(
    typeof slug === 'string' ? slug : slug[0]
  )

  const buildTimeUnformatted = new Date()
  const staticBuildTime = buildTimeUnformatted.toUTCString()

  return {
    props: {
      data: response.data,
      staticBuildTime
    },
    revalidate: 15
  }
}

export default Product
