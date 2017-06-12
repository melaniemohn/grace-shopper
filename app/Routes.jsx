import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

// components
// ADD MORE COMPONENTS as we write them
import store from './store' // delete this -KHCL

import App from './components/App'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Categories from './components/Categories'
import CategoryContainer from './containers/CategoryContainer'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import AddProduct from './components/addProduct'

// ----- dispatchers -----
import { fetchProducts, fetchOneProduct } from './reducers/products-reducer'
import { fetchCategories, fetchCategory } from './reducers/category-reducer'

// ----- routes component -----
// add an index route right under "/"...       <IndexRoute component={Categories} />
// again, ADD MORE ROUTES as we write their components... login, user pages, cart, checkout, etc.
// that said, we might not need all of the fetch functions that are listed... since some of that info is on state anyway


// on line 39 : add-product doesn't need an onEnter

const Routes = ({ fetchInitialData, onCategoryEnter, onProductEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path="/login" component={Login} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/:id" component={CategoryContainer} onEnter={onCategoryEnter} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/add-product" component={AddProduct} onEnter={onProductEnter}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

// ----- routes container -----
// MPM note: in fetchInitialDate, order matters!!!
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
