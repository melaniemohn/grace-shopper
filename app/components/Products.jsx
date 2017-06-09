import React from 'react'
import { Link } from 'react-router'

const Products = (props) => {
  const products = props.products
  return (
    <div>
      <h3>Products</h3>
      <div className="list-group">
        {
          products && products.map(product => (
            <div key={ product.id }>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
                <h6>{product.price}</h6>
                <h8>Description: {product.description}</h8>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
