import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  users: require('./user-reducer').default,
  categories: require('./category-reducer').default,
  products: require('./products-reducer').default,
  orders: require('./orders-reducer').default
})

export default rootReducer
