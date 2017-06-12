import React from 'react'
import { Link } from 'react-router'

const Product = (props) => {
  const product = props.selectedProduct
  console.log('PRODUCTS', product)
  return (
    <div>
      <h2>{ product.name }</h2>
        <div className="col-xs-5">
          <img src={product.picture}/>
          <h4>${product.price}</h4>
          <h5>{product.description}</h5>
        </div>
        <div className="col-xs-5">
          <h3>Reviews:</h3>
        </div>
    </div>
  )
}

export default Product
