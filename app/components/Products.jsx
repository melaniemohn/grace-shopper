import React from 'react'
import { Link, browserHistory } from 'react-router'

const Products = (props) => {
  const products = props.products
  const userId = props.userId
  const isAdmin = props.isAdmin
  const addProductToCart = props.onAddProductToCart

  return (
    <div>
     <div className="container">
        <h3>Products</h3>
       {
         isAdmin
           ? <div><button type="button" className="btn btn-default" id="addProduct" onClick={() => browserHistory.push('/add-product')}>add product</button></div>
           : null
       }
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
                <button type="button" className="btn btn-default" onClick={() => addProductToCart(product, userId)}>Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
