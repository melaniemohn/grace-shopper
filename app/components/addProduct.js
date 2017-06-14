import React from 'react'
const fs = require('fs')

export const Addproduct = ({addProductBack, categories}) => {
  return (
    <div className="container">
      <h2>Add Product</h2>
      <form className="col-sm-6" onSubmit={evt => {
        evt.preventDefault()
        let image = evt.target.product_image.value
        let splitArr = image.split('\\')
        image = splitArr.pop()
        fs.createReadStream(evt.target.product_image.value).pipe(fs.createWriteStream(`/images/${image}`))
        image = `/images/${image}`
        console.log('modify image', image)
        addProductBack(evt.target.product_name.value, image, evt.target.product_price.value, evt.target.product_description.value, evt.target.categoryId.value[0])
      }}>
        <div className="form-group">
          <h5>Product Name</h5>
          <input type="text" name="product_name" className="form-control"/>
        </div>
        <div className="form-group">
          <h5l>Product Picture</h5l>
          <input type="file" name="product_image" className="form-control"/>
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
