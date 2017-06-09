import React from 'react'

export const Addproduct = ({addProduct, categories}) => {
  return (
    <div>

      <form onSubmit={evt => {
        evt.preventDefault()
        addProduct(evt.target.product_name.value, evt.target.product_image.value, evt.target.product_price.value, evt.target.product_description.value, evt.target.categoryId.value[0])
      }}>
        <label>Product Name</label>
        <input type="text" name="product_name"/>
        <label>Product Picture</label>
        <input type="file" name="product_image"/>
        <label>Product Price</label>
        <input type="number" name="product_price"/>
        <label>Product Description</label>
        <textarea name="product_description"></textarea>
        <select name="category" id="categoryId">
          {
            categories && categories.map((category) => (
              <option key={category.id}>{category.id} {category.name}</option>
            ))
          }
        </select>
      </form>
    </div>

  )
}

import {addProduct} from 'App/app/reducers/products-reducer'
import {connect} from 'react-redux'

const AddProduct = connect(
  (state) => ({ categories: state.category.list }),
  {addProduct})(Addproduct)

export default AddProduct
