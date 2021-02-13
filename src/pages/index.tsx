/* eslint-disable indent */
import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiChevronRight, FiHome } from 'react-icons/fi'
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
  const [tranformState, setTransformState] = useState<string | number>(0)

  const [isTitleClicked, setIsTitleClicked] = useState(0)

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

  const handleResize = useCallback(() => {
    if (window.innerWidth < 1600) {
      const newTranslateX = isTitleClicked * 90
      setTransformState(`-${newTranslateX}vw`)
    } else {
      const newTranslateX = isTitleClicked * 1440
      setTransformState(`-${newTranslateX}px`)
    }
    console.log('resized')
  }, [isTitleClicked])

  if (process.browser) {
    window.addEventListener('resize', handleResize)
  }

  useEffect(() => {
    if (window.innerWidth < 1600) {
      const newTranslateX = isTitleClicked * 90
      setTransformState(`-${newTranslateX}vw`)
    } else {
      const newTranslateX = isTitleClicked * 1440
      setTransformState(`-${newTranslateX}px`)
    }
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
          <ProductBoardContainer className="ProductBoardContainerClass">
            {collectionsData.map((collection, index) => {
              return (
                <motion.div
                  key={index}
                  className="productBoard"
                  initial={false}
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
                  <Link href={`/dynamic-product/${collection.collectionId}`}>
                    <div className="linkClass">
                      <p>Go to dynamic product page</p>
                      <FiChevronRight size={40} color={'#BEE6E6'} />
                    </div>
                  </Link>
                  <Link href={`/static-product/${collection.collectionId}`}>
                    <div className="linkClassCollection">
                      <p>Go to static product page</p>
                      <FiChevronRight size={40} color={'#1D2C38'} />
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
          <Link href={'/forever-static-home'}>
            <div className="forever">
              <p>Go to forever-static-home</p>
            </div>
          </Link>
          <div className="developed">
            <p className="bold">Developed by</p>
            <p>Pedro Cruz</p>
          </div>
        </footer>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data140 = await useCollections('140')
  const data141 = await useCollections('141')
  const data142 = await useCollections('142')

  const buildTimeUnformatted = new Date()
  const buildTime = buildTimeUnformatted.toUTCString()

  return {
    props: {
      collectionsData: [data140.data, data141.data, data142.data],
      buildTime
    },
    revalidate: 120
  }
}

export default Home
