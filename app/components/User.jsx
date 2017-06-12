import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  console.log('in user component props', props)
  const user = props.selectedUser
  const orders = props.selectedUser.orders

  return (
    <div className="container">
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>Shipping address:</h3>
      <h3>{user.shipAddress}</h3>
      <h3>Orders</h3>
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

export default User
