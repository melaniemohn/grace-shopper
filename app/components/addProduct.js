import React from 'react'

export const Addproduct = ({ categories, addProduct }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    addProduct(evt.target.product_name.value, evt.target.product_image.value, evt.target.product_price.value, evt.target.product_description.value, evt.target.categoryId.value[0])
  }}>
    <label>Product Name</label>
    <input type="text" name="product_name"> </input>
    <label>Product Picture</label>
    <input type="file" name="product_image"></input>
    <label>Product Price</label>
    <input type="number" name="product_price"> </input>
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
)
import {addProduct} from 'App/app/reducers/product'
import {connect} from 'react-redux'

export default connect(
  ({ categories }) => ({ categories: categories.list }),
  {addProduct})(Addproduct)
