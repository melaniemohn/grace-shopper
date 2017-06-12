// this is a list of all of a user's orders
// we'll want to exclude the cart here
// so just list orders with a status of created or completed
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchOrdersByUser } from '../reducers/orders-reducer'
// change where we're getting this function?
// or, better, change the back-end route we're hitting in fetchOrdersByUser

// ----- order history component -----
// make order ID a link to single-order page
// and add an order date to onSubmit somehow

export const OrderHistory = (props) => {
  console.log('props', props)
  const orders = props.orders

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>
          {
            orders && orders.map(order => (
              <tr key={order.id}>
                <td>oops order date here</td>
                <td>
                  <Link to={`/orders/${order.id}`}>{order.id}</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

// ----- order history container -----
const mapStateToProps = (state) => ({orders: state.orders.list})

const mapDispatchToProps = ({ fetchOrdersByUser })

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
