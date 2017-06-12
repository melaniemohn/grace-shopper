import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  console.log('in user component props', props)
  const user = props.selectedUser

  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>Shipping address:</h3>
      <h3>{user.shipAddress}</h3>
      <h3>Orders</h3>
    </div>
  )
}

export default User
