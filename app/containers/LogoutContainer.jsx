import {connect} from 'react-redux'
import {logout} from 'APP/app/reducers/auth'
import Navbar from './Navbar'

const mapDispatchToProps = () => ({ logout })

export default connect(mapDispatchToProps)(Navbar)