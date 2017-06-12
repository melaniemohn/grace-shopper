'use strict'

import { connect } from 'react-redux'
import Product from '../components/Product'

const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {
    selectedProduct: state.products.selected
  }
}

const ProductContainer = connect(mapStateToProps)(Product)

export default ProductContainer
