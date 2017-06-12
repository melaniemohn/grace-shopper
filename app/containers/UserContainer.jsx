import User from '../components/User'
import { connect } from 'react-redux'

// we'll also want to add user's own orders to state, when we have orders on state
const mapStateToProps = (state) => ({
  selectedUser: state.users.selected
})

// ADD mapDispatchToProps where user can edit their user info

const UserContainer = connect(mapStateToProps)(User)

export default UserContainer
