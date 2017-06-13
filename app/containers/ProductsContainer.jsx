import {connect, Provider} from 'react-redux'
import Products from '../components/Products'
import { addProductToCart } from '../reducers/orders-reducer'

// const mapStateToProps = (state) => ({
//   products: state.products.list,
//   selectedProduct: state.products.selected
// })

const mapStateToProps = (state) => {
  let userId
  if (state.auth) { userId = state.auth.id }
  return {
    products: state.products.list,
    selectedProduct: state.products.selected,
    userId: userId
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddProductToCart: (product, userId) => {
    console.log('add clicked')
    dispatch(addProductToCart(product, userId))
  }
})

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer
