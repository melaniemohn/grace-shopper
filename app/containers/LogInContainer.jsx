import Login from '../components/Login.jsx'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapState = () => ({ message: 'Log in' })

const mapDispatch = (dispatch) => ({
  login: (username, password)=>{
    dispatch(login(username, password))
  }
})

export default connect(mapState, mapDispatch)(Login)
