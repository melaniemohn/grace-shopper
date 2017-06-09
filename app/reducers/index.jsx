import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  categories: require('./category-reducer').default,
  products: require('./products-reducer').default
})

export default rootReducer
