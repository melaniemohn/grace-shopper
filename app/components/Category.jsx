import React from 'react'
import { Link } from 'react-router'

// this component will provide a list of products in the selected category
// maybe make a visual indicator for which category we're in, instead of / in addition to the text?
// so like, check a box for food or coffee or whatever

const Category = (props) => {
  const products = props.products
  // const category = props.selectedCategory
  console.log('props', props)

  return (
    <div>
      <h3>{props.selectedCategory.name}</h3>
      <h4>Here's the {props.selectedCategory.name} menu! Browse products below.</h4>
      {
        products && products.filter(product => product.category_id === props.selectedCategory.id)
        .map(product => (
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
  )
}

export default Category
