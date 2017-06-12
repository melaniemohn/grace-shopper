import React from 'react'
import { Link } from 'react-router'

const Product = (props) => {
  const product = props.selectedProduct
  console.log('PRODUCTS', product)
  return (
    <div>
      <h3>{ product.name }</h3>
    </div>
  )
}

export default Product
