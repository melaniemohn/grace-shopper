import React from 'react'
import { Link } from 'react-router'

const Product = (props) => {
  const product = props.selectedProduct
  const userId = props.userId
  const addProductToCart = props.onAddProductToCart

  console.log('PRODUCTS', product)
  console.log('ID', userId)
  console.log('ON CLICK', addProductToCart)
  return (
    <div>
      <h2>{ product.name }</h2>
        <div className="col-xs-5">
          <img src={product.picture}/>
          <h4>${product.price}</h4>
          <h5>{product.description}</h5>
          <button type="button" className="btn btn-default" onClick={() => { return addProductToCart(product, userId) }}>Add To Cart</button>
        </div>
        <div className="col-xs-5">
          <h3>Reviews:</h3>
        </div>
    </div>
  )
}

export default Product
