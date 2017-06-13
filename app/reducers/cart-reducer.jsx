// WE ARE MOVING ALL OF THIS INTO THE ORDERS REDUCER yay

// import axios from 'axios'

// /* ------------------ actions ------------------------ */

// const GET_CART = 'GET_CART'
// // const CREATE_ITEM (for an item that isn't in cart yet), REMOVE_ITEM, UPDATE_ITEM (for stuff that is in cart already), etc
// const REMOVE_ALL = 'REMOVE_ALL'

// /* ------------------ action creators ---------------- */

// export const getCart = (cart) => ({ type: GET_CART, cart })
// export const removeAllItems = (cart) => ({ type: REMOVE_ALL, cart })

// /* ------------------ reducer ------------------------ */

// const initialCartState = {
//   orderItems: []
// }

// const reducer = (state=initialCartState, action) => {
//   switch (action.type) {
//   case GET_CART:
//     return Object.assign({}, state, {orderItems: action.cart})
//   case REMOVE_ALL:
//     return Object.assign({}, {orderItems: {}})
//   default:
//     return initialCartState
//   }
// }

// /* ------------------ dispatchers ------------------- */
