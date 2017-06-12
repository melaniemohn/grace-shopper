import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { removeUser } from '../reducers/user-reducer'

// ----- users component -----

export const Users = (props) => {
  console.log('props', props)
  const users = props.users
  // click user ID to edit info?
  // add a link to orders component????
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map(user => (
              <tr key={user.id}>
                <td>
                 <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                      className="btn btn-danger btn-xs"
                      onClick={() => props.removeUser(user.id)}>
                    <span className="glyphicon glyphicon-remove" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

// ----- users container -----
const mapStateToProps = (state) => ({users: state.users.list})

const mapDispatchToProps = ({ removeUser })

export default connect(mapStateToProps, mapDispatchToProps)(Users)
