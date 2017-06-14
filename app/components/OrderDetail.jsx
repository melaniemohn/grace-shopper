// okay, so this will be a component that displays a *created* or *completed* order
// we get here by clicking on an order# from the table on the single-user page, in the User component
// we'll reuse this for our CART component, with extra functionality

// again, write this as  one big conditional:
// make sure auth.user.id is the same as orders.selected.user_id or whatever

import React from 'react'
import { connect } from 'react-redux'

// ----- single-order component -----

export const OrderDetail = (props) => {
  const order = props.selectedOrder
  const items = props.selectedOrder.orderItems
  // instead of looping over our product list (don't even map products to props!!)...
  // ...let's rewrite the api route to include product data the way we did with users
  return (
    <div className="container">
      <h3>Details for Order #{order.id}</h3>
      <h4>Order Status: {order.status}</h4>
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

// ----- single-order container -----
const mapStateToProps = (state) => ({
  selectedOrder: state.orders.selected,
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)
