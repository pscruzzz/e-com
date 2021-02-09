import React from 'react'
import { FiHome } from 'react-icons/fi'
import Link from 'next/link'

import { Container } from '../styles/pages/Checkout'

const Checkout: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="message">
          <h1>Your item is not available.</h1>
          <h2>
            But if you are feeling nice today and want to donate your money,
            without receiving nothing in return, you can always donate to
          </h2>
        </div>
        <div className="pix">
          <h3>PIX KEY:</h3>
          <h3>pedro.scruz@icloud.com</h3>
        </div>
        <Link href="/">
          <div className="goHome">
            <FiHome size={40} />
            <h3>Or you can go back home</h3>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default Checkout
