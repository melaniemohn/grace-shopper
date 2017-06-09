import {connect, Provider} from 'react-redux'
import Products from '../components/Products'

const mapStateToProps = (state) => {
  console.log("STATE", state)
  return {
    products: state.products.list,
    selectedProduct: state.products.selected
  }
}

const ProductsContainer = connect(mapStateToProps)(Products)

export default ProductsContainer
