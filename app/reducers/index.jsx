import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  category: require('./category-reducer'),
  products: require('./products-reducer')
})

export default rootReducer
