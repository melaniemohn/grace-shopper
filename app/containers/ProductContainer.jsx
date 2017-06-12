'use strict'

import { connect } from 'react-redux'
import Product from '../components/Product'
import { addProductToCart } from '../reducers/products-reducer'

const mapStateToProps = (state) => {
  console.log('STATE', state)
  let userId
  if (state.auth) { userId = state.auth.id }
  return {
    selectedProduct: state.products.selected,
    userId: userId
  }
}

const mapDispatchToProp = (dispatch) => ({
  onAddProductToCart: (product, userId) => {
    console.log('add clicked')
    dispatch(addProductToCart(product, userId))
  }
})
const ProductContainer = connect(mapStateToProps, mapDispatchToProp)(Product)

export default ProductContainer
