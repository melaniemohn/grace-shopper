import Login from '../components/Login.jsx'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapState = () => ({ message: 'Log in' })

const mapDispatch = ({ login })

export default connect(mapState, mapDispatch)(Login)
