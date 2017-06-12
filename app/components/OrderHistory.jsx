// this is a list of all of a user's orders
// we'll want to exclude the cart here
// so just list orders with a status of created or completed
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// ----- order history component -----

export const OrderHistory = (props) => {

}

// ----- order history container -----
const mapStateToProps = (state) => ({orders: state.orders.list})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
