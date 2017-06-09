import React from 'react'
import { Link } from 'react-router'

// this component will provide a list of products in the selected category
// maybe make a visual indicator for which category we're in, instead of / in addition to the text?
// so like, check a box for food or coffee or whatever

const Category = (props) => {
  const products = props.products
  const category = props.selectedCategory
  console.log('props', props)

  return (
    <div>
      <h3>{category}</h3>
      <h4>Here's the {category} menu! Browse products below.</h4>
      { // filtering products here
        // add another list item with Link for picture, right *above* name?
        products && products.filter(product => product.category_id === category.id)
        .map(product => {
          <ul>
            <li>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </li>
            <li>{product.price}</li>
          </ul>
        })
      }
    </div>
  )
}

export default Category
