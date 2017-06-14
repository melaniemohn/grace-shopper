import React from 'react'

export const Addproduct = ({addProductBack, categories}) => {
  return (
    <div className="container">
      <h2>Add Product</h2>
      <form className="col-sm-6" onSubmit={evt => {
        evt.preventDefault()
        addProductBack(evt.target.product_name.value, evt.target.product_image.value, evt.target.product_price.value, evt.target.product_description.value, evt.target.categoryId.value[0])
      }}>
        <div className="form-group">
          <h5>Product Name</h5>
          <input type="text" name="product_name" className="form-control"/>
        </div>
        <div className="form-group">
          <h5l>Product Picture - paste a url for the product image</h5l>
          <input type="text" name="product_image" className="form-control"/>
        </div>
        <div className="form-group">
          <h5>Product Price</h5>
          <input type="number" name="product_price" className="form-control"/>
        </div>
        <div className="form-group">
          <h5>Product Description</h5>
          <textarea name="product_description" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <h5>Select Category</h5>
          <select name="category" id="categoryId" className="custom-select">
            {
              categories && categories.map((category) => (
                <option key={category.id}>{category.id} {category.name}</option>
              ))
            }
          </select>
        </div>
        <button type="submit" className="btn btn-default">Submit New Product</button>
      </form>
    </div>

  )
}

import {addProductBack} from 'App/app/reducers/products-reducer'
import {connect} from 'react-redux'

const AddProduct = connect(
  (state) => ({ categories: state.categories.list }),
  {addProductBack})(Addproduct)

export default AddProduct
