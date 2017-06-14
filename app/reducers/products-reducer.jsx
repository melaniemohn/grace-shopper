import axios from 'axios'
import { browserHistory } from 'react-router'

const initialProductsState = {
  list: [],
  selected: {}
}

/* ------------------------ REDUCER ------------------------ */
const reducer = (state = initialProductsState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GETPRODUCTS:
    return Object.assign({}, state, {list: action.products})
  case GETONEPRODUCT:
    return Object.assign({}, state, {selected: action.product})
  case ADD_PRODUCT_FRONT:
    newState.list.push(action.product)
    return newState
  case ADD_REVIEW:
    newState.selected.reviews.push(action.review)
    return newState
  default:
    return state
  }
}

/* ------------------------ ACTIONS ------------------------ */
const GETPRODUCTS = 'GET_PRODUCTS'
const GETONEPRODUCT = 'GET_ONE_PRODUCT'
const ADD_PRODUCT_FRONT = 'ADD_PRODUCT_FRONT'
const ADD_REVIEW = 'ADD_REVIEW'

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

export const addReview = review => ({
  type: ADD_REVIEW, review
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

export const addNewReview = (title, text, stars) => {
  (dispatch, getState) => axios.put('/api/products/:productId', {
    title: title,
    text: text,
    stars: stars
  })
  // .then()
}

export default reducer
