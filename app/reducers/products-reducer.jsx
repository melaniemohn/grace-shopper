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
    const newState = Object.assign({}, state)
    newState.list.push(action.product)
    return newState
  case SET_CART:
    return Object.assign({}, state, {cart: action.cart})
  default:
    return state
  }
}

/* ------------------------ ACTIONS ------------------------ */
const GETPRODUCTS = 'GET_PRODUCTS'
const GETONEPRODUCT = 'GET_ONE_PRODUCT'
const ADD_PRODUCT_FRONT= 'ADD_PRODUCT_FRONT'
const SET_CART = 'SET_CART'

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

export const setCart = cart => ({
  type: SET_CART, cart
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
    name: name,
    picture: image,
    price: price,
    description: description,
    category_id: categoryId
  })
      .then(product => {
        dispatch(addProductFront(product.data))
        browserHistory.push('/products')
      })
      .catch(err => console.error('Adding product unsuccessful', err))

export const addProductToCart = (product, userId) =>
  dispatch =>
    axios.put(`api/orders/cart/${product.id}?user=${userId}`, {
      user_id: userId,
      quantity: 1,
      price: product.price,
      product_id: product.id
    }).then(res => dispatch(setCart(res.data)))
      .catch(err => console.error('Fail to update cart', err))

export default reducer
