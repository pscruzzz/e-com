import React from 'react'
import { useRouter } from 'next/router'

const Product: React.FC = () => {
  const router = useRouter()

  return <h1>{router.query.slug}</h1>
}

export default Product
