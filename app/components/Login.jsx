import React from 'react'
import {login} from 'APP/app/reducers/auth'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onLoginSubmit}>
        <label>Email</label>
        <input name="email" />
        <br />
        <label>Password</label>
        <input name="password" type="password" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>OR</ p>
        <a
          href="api/auth/login/google"
          className="btn btn-social btn-google btn-xs">
          <img src = "https://i.stack.imgur.com/XzoRm.png" />
          <i className = "fa fa-google"></i>
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
