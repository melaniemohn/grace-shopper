// this component will work like order detail component
// add Cart route in our Routes component
// and wire up link to Cart in Navbar component

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import functions from reducer here to update / delete items

// ----- cart component -----

export const Cart = (props) => {
  console.log('props in Cart', props)
  const items = props.cart

  return (
    <div className="container">
      <h3>Here are the items in your cart. Buy more!</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            items && items.map(item => (
              <tr key={item.id}>
                <td>{item.product.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to={'/checkout'}>
        <button className="btn-default">Checkout</button>
      </Link>
    </div>
  )
}

// ----- cart container -----
// instead of getting all the orders, fetch by user (see Routes)
const mapStateToProps = (state) => ({
  cart: state.orders.cart
})

// we'll want to mapDispatch a function to add to cart??
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
