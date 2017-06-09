import React from 'react'
import { Link } from 'react-router'

const User = (props) => {
  const user = props.selectedUser

  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  )
}

export default User
