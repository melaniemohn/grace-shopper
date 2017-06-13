import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  console.log('in user component props', props)
  const user = props.selectedUser
  const orders = props.selectedUser.orders

  // MPM note: we don't want to display orders with status of cart, so filter order.status !== 'cart'

  const convertDate = (date) => {
    const dateArr = date.slice(0, 10).split('-')
    return dateArr[1] + '-' + dateArr[2] + '-' + dateArr[0]
  }

  return (
    <div className="container">
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <h4>Shipping address:</h4>
      <h4>{user.shipAddress}</h4>
      <h3>Order History</h3>
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
                <td>{convertDate(order.updated_at)}</td>
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
