import axios from 'axios'

/* ------------------ actions ------------------------ */

const GET_ORDERS = 'GET_ORDERS'
const SELECT_ORDER = 'SELECT_ORDER'
// const CREATE_ORDER = 'CREATE_ORDER'
// const UPDATE_ORDER = 'UPDATE_ORDER'
// we'll use UPDATE_ORDER to edit the cart, which is just an order with a status of 'cart'

/* ------------------ action creators ---------------- */

export const get = (orders) => ({ type: GET_ORDERS, orders })
export const select = (order) => ({ type: SELECT_ORDER, order })
// export const create = (order) => ({ type: CREATE_ORDER, order })
// export const update = (order) => ({ type: UPDATE_ORDER, order })

/* ------------------ reducer ------------------------ */

const initialOrdersState = {
  list: [],
  selected: {}
}

const reducer = (state = initialOrdersState, action) => {
  switch (action.type) {
  case GET_ORDERS:
    return Object.assign({}, state, {list: action.orders})
  case SELECT_ORDER:
    return Object.assign({}, state, {selected: action.order})
  default:
    return initialOrdersState
  }
}

/* ------------------ dispatchers ------------------- */

export const fetchOrdersByUser = (id) => dispatch => {
  axios.get(`/api/users/${id}/orders/`)
  .then(res => {
    dispatch(get(res.data))
  })
  .catch(err => console.error('Error fetching orders :(', err))
}

export const fetchSingleOrder = (id, orderId) => dispatch => {
  axios.get(`/api/users/${id}/orders/${orderId}`)
  .then(res => {
    dispatch(get(res.data))
  })
  .catch(err => console.error('Error fetching order info :(', err))
}

export default reducer
