// this component will work like order detail component
// add Cart route in our Routes component
// and wire up link to Cart in Navbar component

import React from 'react'
import { connect } from 'react-redux'
// also, import Link, to have links to single-product pages

// ----- cart component -----

export const Cart = (props) => {
  const orders = props.orders.list
  const cart = orders.filter(order => order.status = 'list')
  // we want to filter for where order.status is cart
  // MPM omg husky hates me
  // const cart = orders.filter((order) => {
  //   return order.status = 'list'
  // })

  const items = props.selectedOrder.orderItems
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
    </div>
  )
}

// ----- cart container -----

const mapStateToProps = (state) => ({
  orders: state.orders.list
})
