import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect } from 'react-router'

// components
import Homepage from './components/Homepage'
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
import OrderDetail from './components/OrderDetail'
import Cart from './components/Cart'

// ----- dispatchers -----
import { fetchProducts, fetchOneProduct } from './reducers/products-reducer'
import { fetchCategories, fetchCategory } from './reducers/category-reducer'
import { fetchUser, fetchUsers } from './reducers/user-reducer'
import { fetchSingleOrder, fetchOrdersByUser, fetchCart } from './reducers/orders-reducer'

// ----- routes component -----
const Routes = ({ fetchInitialData, onCategoryEnter, onProductEnter, onUserEnter, onUsersEnter, onOrderEnter, onCartEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <IndexRoute component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/orders/cart" component={Cart} onEnter={onCartEnter} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/:id" component={CategoryContainer} onEnter={onCategoryEnter} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/add-product" component={AddProduct}/>
      <Route path="/users" component={Users} onEnter={onUsersEnter}/>
      <Route path="/users/:id" component={UserContainer} onEnter={onUserEnter} />
      <Route path="/orders/:id" component={OrderDetail} onEnter={onOrderEnter} />
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
  },
  onUsersEnter: () => {
    dispatch(fetchUsers())
  },
  onUserEnter: (nextState) => {
    const userId = nextState.params.id
    dispatch(fetchUser(userId))
  },
  onOrderEnter: (nextState) => {
    const orderId = nextState.params.id
    dispatch(fetchSingleOrder(orderId))
  },
  onCartEnter: () => {
    dispatch(fetchCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
