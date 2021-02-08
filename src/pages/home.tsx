/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

import { motion } from 'framer-motion'

import BallonsSVG from '../assets/BallonsSVG'
import CloudsSVG from '../assets/CloudsSVG'
import dog from '../assets/dog.jpeg'
import girl from '../assets/girl.jpg'
import otherGirl from '../assets/otherGirl.jpg'

import {
  Container,
  TitleAnimated,
  Banner,
  CollectionTitleContainer,
  ProductSlider,
  StyledDiv,
  ProductBoardContainer
} from '../styles/pages/Home'

const productCards = [
  {
    src: dog,
    id: 'dog',
    alt: 'dog',
    skuTitle: 'Luxury Purple Ballon',
    skuDescription:
      'Yes, that’s a cute doggo right there. But do you know what is much cuter? That purple balloon and that’s a new one from us.',
    skuPrice: 'R$150,00'
  },
  {
    src: girl,
    id: 'girl',
    alt: 'girl',
    skuTitle: 'Luxury Orange Ballon',
    skuDescription:
      'Yes, that’s a cute doggo right there. But do you know what is much cuter? That purple balloon and that’s a new one from us.',
    skuPrice: 'R$150,00'
  },
  {
    src: otherGirl,
    id: 'otherGirl',
    alt: 'otherGirl',
    skuTitle: 'Luxury Red Ballon',
    skuDescription:
      'Yes, that’s a cute doggo right there. But do you know what is much cuter? That purple balloon and that’s a new one from us.',
    skuPrice: 'R$150,00'
  }
]

const collections = ['Best Seller', 'New Stuff', 'Spotlight']

const Home: React.FC = () => {
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

  const buildTimeUnformatted = new Date()
  const buildTime = buildTimeUnformatted.toUTCString()

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
            {collections.map((collection, index) => {
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
                  initialPosition={animation()}
                  className="CollectionTitle"
                  key={index}
                  role="button"
                  onClick={() => {
                    setIsTitleClicked(index)
                  }}
                >
                  {collection}
                </TitleAnimated>
              )
            })}
          </CollectionTitleContainer>
          <h3 className="mainSubtitle">
            Maybe you are feeling a bit sassy today,huh?
          </h3>
          <ProductBoardContainer>
            {productCards.map((product, index) => {
              return (
                <motion.div
                  key={index}
                  className="productBoard"
                  initial={{ x: -1440 }}
                  animate={{ x: tranformState }}
                  transition={{ type: 'keyframes', duration: 0.5 }}
                >
                  <div className="imageDiv">
                    <img src={product.src} id={product.id} alt={product.alt} />
                  </div>
                  <div className="productProps">
                    <h3 className="skuTitle">{product.skuTitle}</h3>
                    <p className="skuDescription">{product.skuDescription}</p>
                    <h3 className="skuPrice">{product.skuPrice}</h3>
                    <StyledDiv
                      onClick={() => {
                        console.log('oi')
                      }}
                    >
                      Buy Now
                    </StyledDiv>
                  </div>
                  <Link href="/product/oi">
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

export default Home
