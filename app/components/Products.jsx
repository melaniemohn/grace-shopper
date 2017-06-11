import React from 'react'
import { Link } from 'react-router'

const Products = (props) => {
  const products = props.products
  return (
    <div>
      <h3>Products</h3>
      <div className="container">
        {
          products && products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <div className="well short">
                <Link className="img-fluid" to={`/products/${product.id}`}>
                  <img src={product.picture}/>
                  <h4>{product.name}</h4>
                </Link>
                  <h4>{product.price}</h4>
                  <h5>{product.description}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
