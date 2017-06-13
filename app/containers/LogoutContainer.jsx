import {connect} from 'react-redux'
import {logout} from 'APP/app/reducers/auth'
import Navbar from './Navbar'

const mapDispatch = () => ({ logout: logout })

export default connect(mapDispatch)(Navbar)