import axios from 'axios'

/* ------------------ actions ------------------------ */

const GET_ORDERS = 'GET_ORDERS'
const SELECT_ORDER = 'SELECT_ORDER'
const SET_CART = 'SET_CART'
// const CREATE_ORDER = 'CREATE_ORDER'
// const UPDATE_ORDER = 'UPDATE_ORDER'
// we'll use UPDATE_ORDER to edit the cart, which is just an order with a status of 'cart'

/* ------------------ action creators ---------------- */

export const get = (orders) => ({ type: GET_ORDERS, orders })
export const select = (order) => ({ type: SELECT_ORDER, order })
export const setCart = cart => ({type: SET_CART, cart})
// export const create = (order) => ({ type: CREATE_ORDER, order })
// export const update = (order) => ({ type: UPDATE_ORDER, order })

/* ------------------ reducer ------------------------ */

const initialOrdersState = {
  list: [],
  selected: {},
  cart: []
}

const reducer = (state = initialOrdersState, action) => {
  switch (action.type) {
  case GET_ORDERS:
    return Object.assign({}, state, {list: action.orders})
  case SELECT_ORDER:
    return Object.assign({}, state, {selected: action.order})
  case SET_CART:
    return Object.assign({}, state, {cart: action.cart})
  default:
    return initialOrdersState
  }
}

/* ------------------ dispatchers ------------------- */

export const fetchOrdersByUser = id => dispatch => {
  // change this route... should have order info on state already in single-user page?
  axios.get(`/api/users/${id}/orders/`)
  .then(res => {
    dispatch(get(res.data))
  })
  .catch(err => console.error('Error fetching orders :(', err))
}

export const fetchOrderByUser = (id, orderId) => dispatch => {
  axios.get(`/api/users/${id}/orders/${orderId}`)
  .then(res => {
    dispatch(select(res.data))
  })
  .catch(err => console.error('Error fetching order info :(', err))
}

export const fetchSingleOrder = (orderId) => dispatch => {
  axios.get(`/api/orders/${orderId}`)
  .then(res => {
    dispatch(select(res.data))
  })
  .catch(err => console.error('Error fetching order info :(', err))
}

export const addProductToCart = (product, userId) =>
  dispatch =>
    axios.post('/api/orders/cart', {
      user_id: userId,
      quantity: 1,
      price: product.price,
      product_id: product.id
    }).then(res => dispatch(setCart(res.data)))
      .catch(err => console.error('Fail to update cart', err))

export default reducer

// `api/orders/cart/${product.id}?user=${userId}`
