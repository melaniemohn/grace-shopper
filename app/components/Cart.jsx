// this component will work like order detail component
// add Cart route in our Routes component
// and wire up link to Cart in Navbar component

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import functions from cart reducer here?? to update / delete items

// ----- cart component -----

export const Cart = (props) => {
  // we want to filter for where order.status is cart
  const orders = props.orders.list
  const cart = orders && orders.filter(order => order.status = 'list')
  // MPM omg husky hates me
  // const cart = orders.filter((order) => {
  //   return order.status = 'list'
  // })

  const items = cart && props.cart.orderItems
  // also, add a submit order button to the bottom
  return (
    <div className="container">
      <h3>Here are the items in your cart. Buy more shit!</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            items && items.map(item => (
              <tr key={item.id}>
                <td>{item.product.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to={'/checkout'}>
        <button className="btn-default">Checkout</button>
      </Link>
    </div>
  )
}

// ----- cart container -----
// instead of getting all the orders, fetch by user (see Routes)
const mapStateToProps = (state) => ({
  orders: state.orders.list
})

// we'll want to mapDispatch a function to add to cart??
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
