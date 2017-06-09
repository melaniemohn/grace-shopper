import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// components
// ADD MORE COMPONENTS as we write them
import store from './store'
import App from './components/App'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
// import Categories from './components/Categories'
import CategoryContainer from './containers/CategoryContainer'
import ProductsContainer from './containers/ProductsContainer'
import AddProduct from './components/addProduct'

// ----- dispatchers -----
import { fetchProducts, fetchOneProduct } from './reducers/products-reducer'
import { fetchCategories, fetchCategory } from './reducers/category-reducer'

// ----- routes component -----
// add an index route right under "/"...       <IndexRoute component={Categories} />
// again, ADD MORE ROUTES as we write their components... login, user pages, cart, checkout, etc.
// that said, we might not need all of the fetch functions that are listed... since some of that info is on state anyway
const Routes = ({ fetchInitialData, onCategoryEnter, onProductEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path="/categories/:id" component={CategoryContainer} onEnter={onCategoryEnter} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:id" component={ProductsContainer} onEnter={onProductEnter} />
      <Route path="/add-product" component={AddProduct} onEnter={onProductEnter}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

// ----- routes container -----
const mapStateToProps = null
const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  },
  onCategoryEnter: (nextState) => {
    const categoryId = nextState.params.id
    dispatch(fetchCategory(categoryId))
  },
  onProductEnter: (nextState) => {
    const productId = nextState.params.id
    dispatch(fetchOneProduct(productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

/*

 */
