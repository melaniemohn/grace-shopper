import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link className="navbar-brand" to="/">bits & bytes</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/categories" activeClassName="active">Categories</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}
