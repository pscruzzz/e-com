/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import { GetStaticProps } from 'next'
import useCollections from '../hooks/useCollections'

import { motion } from 'framer-motion'

import BallonsSVG from '../assets/BallonsSVG'
import CloudsSVG from '../assets/CloudsSVG'

import {
  TitleAnimated,
  Container,
  Banner,
  CollectionTitleContainer,
  ProductSlider,
  StyledDiv,
  ProductBoardContainer
} from '../styles/pages/Home'

interface IHomeProps {
  collectionsData: {
    collectionId: number
    Name: string
    ProductName: string
    SkuId: number
    ProductDescription: string
    SkuImageUrl: string
    Price: number
  }[]
  buildTime: string
}

const Home: React.FC<IHomeProps> = ({ collectionsData, buildTime }) => {
  const [tranformState, setTransformState] = useState(-1440)
  const [isTitleClicked, setIsTitleClicked] = useState(1)

  const MainTitle = {
    fontSize: '58px',
    color: '#1D2C38',
    whiteSpace: 'nowrap',
    marginBottom: '20px',
    fontWeight: '400',
    width: 'fit-content',
    position: 'absolute',
    inset: '0% 0% 0% 50%',
    transform: 'translateX(-50%)',
    textAlign: 'center'
  }

  const LeftSideTitle = {
    fontSize: '35px',
    color: '#8ea6b9',
    whiteSpace: 'nowrap',
    marginBottom: '0px',
    fontWeight: '400',
    position: 'absolute',
    inset: '50% 0% 0% 100%',
    width: 'fit-content',
    transform: 'translateX(-100%)',
    textAlign: 'center'
  }

  const RightSideTitle = {
    fontSize: '35px',
    color: '#8ea6b9',
    whiteSpace: 'nowrap',
    marginBottom: '0px',
    fontWeight: '400',
    position: 'absolute',
    width: 'fit-content',
    inset: '50% 100% 0% 0%',
    transform: 'translateX(0%)',
    textAlign: 'center'
  }

  useEffect(() => {
    setTransformState(isTitleClicked * -1440)
  }, [isTitleClicked])

  return (
    <Container>
      <div className="wrapper">
        <Head>
          <title>e-COM</title>
        </Head>
        <header>
          <CloudsSVG />
          <span className="logo">e-COM</span>
        </header>
        <Banner>
          <div>
            <h1 className="mainText">A new way</h1>
            <h1 className="mainText">to E-COM Tuesday</h1>
          </div>
          <BallonsSVG />
        </Banner>
        <ProductSlider>
          <CollectionTitleContainer>
            {collectionsData.map((collection, index) => {
              const animation = () => {
                if (isTitleClicked === index) {
                  return MainTitle
                } else if (index === 0) {
                  return RightSideTitle
                } else if (index === 2) {
                  return LeftSideTitle
                } else if (index === 1 && isTitleClicked === 2) {
                  return LeftSideTitle
                } else if (index === 1 && isTitleClicked === 0) {
                  return RightSideTitle
                }
              }

              return (
                <TitleAnimated
                  className="CollectionTitle"
                  initialPosition={animation()}
                  key={index}
                  role="button"
                  onClick={() => {
                    setIsTitleClicked(index)
                    console.log(index)
                  }}
                >
                  {collection.Name}
                </TitleAnimated>
              )
            })}
          </CollectionTitleContainer>
          <h3 className="mainSubtitle">
            Maybe you are feeling a bit sassy today,huh?
          </h3>
          <ProductBoardContainer>
            {collectionsData.map((collection, index) => {
              return (
                <motion.div
                  key={index}
                  className="productBoard"
                  initial={{ x: -1440 }}
                  animate={{ x: tranformState }}
                  transition={{ type: 'keyframes', duration: 0.5 }}
                >
                  <div className="imageDiv">
                    <img
                      src={collection.SkuImageUrl}
                      id={`${collection.SkuId}`}
                      alt={`${collection.SkuId}`}
                    />
                  </div>
                  <div className="productProps">
                    <h3 className="skuTitle">{collection.ProductName}</h3>
                    <p className="skuDescription">
                      {collection.ProductDescription}
                    </p>
                    <h3 className="skuPrice">R$ {collection.Price},00</h3>
                    <Link href="/checkout">
                      <StyledDiv>Buy Now</StyledDiv>
                    </Link>
                  </div>
                  <Link href={`/product/${collection.collectionId}`}>
                    <div className="linkClass">
                      <p>Go to product page</p>
                      <FiChevronRight size={40} color={'#BEE6E6'} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </ProductBoardContainer>
        </ProductSlider>
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

export const getStaticProps: GetStaticProps = async context => {
  const data140 = await useCollections('140')
  const data141 = await useCollections('141')
  const data142 = await useCollections('142')

  const buildTimeUnformatted = new Date()
  const buildTime = buildTimeUnformatted.toUTCString()

  return {
    props: {
      collectionsData: [data140, data141, data142],
      buildTime
    },
    revalidate: 1000
  }
}

export default Home