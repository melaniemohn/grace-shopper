// name this file consistently --KHCL


import axios from 'axios'
import { browserHistory } from 'react-router'

const initialProductsState = {
  list: [],
  selected: {}
}

/* ------------------------ REDUCER ------------------------ */
const reducer = (state = initialProductsState, action) => {
  switch (action.type) {
  case GETPRODUCTS:
    return Object.assign({}, state, {list: action.products})
  case GETONEPRODUCT:
    return Object.assign({}, state, {selected: action.product})
  case ADD_PRODUCT_FRONT:
    const newState = Object.assign({}, state) // {list: [...list, action.product]} --KHCL
    newState.list.push(action.product)
    return newState

  default:
    return state
  }
}

/* ------------------------ ACTIONS ------------------------ */
const GETPRODUCTS = 'GET_PRODUCTS'
const GETONEPRODUCT = 'GET_ONE_PRODUCT'
const ADD_PRODUCT_FRONT= 'ADD_PRODUCT_FRONT'  // underscore or not -- consistency -KHCL

/* ------------------------ ACTION CREATORS ------------------------ */
export const getProducts = products => ({
  type: GETPRODUCTS, products
})

export const getOneProduct = product => ({
  type: GETONEPRODUCT, product
})

export const addProductFront = product => ({
  type: ADD_PRODUCT_FRONT, product
})

/* ------------------------ DISPATCHERS ------------------------ */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res => dispatch(getProducts(res.data)))
      .catch(err => console.error('Fetching products unsuccessful', err))

export const fetchOneProduct = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(res => dispatch(getOneProduct(res.data)))
      .catch(err => console.error('Fetching product unsuccessful', err))

export const addProductBack = (name, image, price, description, categoryId) =>
  (dispatch, getState) => axios.post('/api/products', {
  // why do you have getState? You define it but never use it. We do have access to it, but we don't ever use it so we can remove. -KHCL
    name: name,  // we can just do name (thank ES6) --KHCL
    picture: image,
    price: price, // same as name -- KHCL
    description: description, // same as name --KHCL
    category_id: categoryId
  })
      .then(product => {
        dispatch(addProductFront(product.data))
        browserHistory.push('/products')
      })
      .catch(err => console.error('Adding product unsuccessful', err))

export default reducer
