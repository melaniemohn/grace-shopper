import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

// components
// ADD MORE COMPONENTS as we write them
import store from './store'
import App from './components/App'
import Login from './components/Login'
import Users from './components/Users'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Categories from './components/Categories'
import CategoryContainer from './containers/CategoryContainer'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import AddProduct from './components/addProduct'
import UserContainer from './containers/UserContainer'

// ----- dispatchers -----
import { fetchProducts, fetchOneProduct } from './reducers/products-reducer'
import { fetchCategories, fetchCategory } from './reducers/category-reducer'
import { fetchUser, fetchUsers } from './reducers/user-reducer'

// ----- routes component -----
// MPM ADD SINGLE-USER ROUTE HERE AHHH
// add an index route right under "/"...       <IndexRoute component={Categories} />
// again, ADD MORE ROUTES as we write their components... login, user pages, cart, checkout, etc.
// that said, we might not need all of the fetch functions that are listed... since some of that info is on state anyway
const Routes = ({ fetchInitialData, onCategoryEnter, onProductEnter, onUserEnter, onUsersEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path="/login" component={Login} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/:id" component={CategoryContainer} onEnter={onCategoryEnter} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/add-product" component={AddProduct} onEnter={onProductEnter} />
      <Route path="/users" component={Users} onEnter={onUsersEnter}/>
      <Route path="/users/:id" component={UserContainer} onEnter={onUserEnter} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

// ----- routes container -----
// MPM note: in fetchInitialData, order matters!!!
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
  },
  onUsersEnter: () => {
    dispatch(fetchUsers())
  },
  onUserEnter: (nextState) => {
    const userId = nextState.params.id
    dispatch(fetchUser(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
