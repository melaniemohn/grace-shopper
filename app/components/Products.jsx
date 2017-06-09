import React from 'react'
import { Link } from 'react-router'

const Products = (props) => {
  console.log("PROPS", props)
  const products = props.products
  console.log("PRODUCTS PROPS", products)
  return (
    <div>
      <h3>Products</h3>
      <div className="list-group">
        {products && products.map(product => {
          <h4>{product.name}</h4>
        })}
      </div>
    </div>
  )
}

export default Products
