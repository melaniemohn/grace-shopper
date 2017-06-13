import React from 'react'
import {login} from 'APP/app/reducers/auth'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.login = login.bind(this)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onLoginSubmit}>
        <input name="email" />
        <input name="password" type="password" />
        <button type="submit" className="btn btn-xs btn-primary">Submit</button>
      </form>
        <a
          href="api/auth/login/google"
          className="btn btn-social btn-google">
          <i className = "fa fa-google"></i>
          <span>Log in with Google</span>
      </ a>
      </ div>
    )
  }

  onLoginSubmit(event) {
    event.preventDefault()
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    login(credentials)
  }
}

export default Login
