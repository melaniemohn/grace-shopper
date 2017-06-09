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
          <li>
            <Link to="/categories" activeClassName="active">Categories</Link>
          </li>
          <li>
            <Link to="/products" activeClassName="active">Products</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/cart" activeClassName="active">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
