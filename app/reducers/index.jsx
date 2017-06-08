import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  category: require('./category-reducer').default,
  products: require('./products-reducer').default
})

export default rootReducer
