import React from 'react'
import {login} from 'APP/app/reducers/auth'

// add this back in:           <i className = "fa fa-google">Login with Google</i>

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }

  render() {
    return (
      <div className="col-xs-5">
        <form onSubmit={this.onLoginSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" className="col-2 form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" className="col-2 form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p>OR</p>
        <a href="api/auth/login/google" className="btn btn-danger" role="button"><i className="fa fa-google"></i> Login with Google</a>
      </div>
    )
  }

  onLoginSubmit(event) {
    event.preventDefault()
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log('LOGIN PROPS', this.props.login)
    this.props.login(credentials.email, credentials.password)
  }
}

export default Login
