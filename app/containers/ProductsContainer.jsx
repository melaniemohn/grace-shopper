import {connect, Provider} from 'react-redux'
import Products from '../components/Products'
import { addProductToCart } from '../reducers/orders-reducer'

// const mapStateToProps = (state) => ({
//   products: state.products.list,
//   selectedProduct: state.products.selected
// })

const mapStateToProps = (state) => {
  let userId, isAdmin
  if (state.auth) {
    userId = state.auth.id
    isAdmin = state.auth.isAdmin
  }
  return {
    products: state.products.list,
    selectedProduct: state.products.selected,
    userId: userId,
    isAdmin: isAdmin
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
