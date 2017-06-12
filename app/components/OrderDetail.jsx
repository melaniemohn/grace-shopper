// okay, so this will be a component that displays a *created* or *completed* order
// we get here by clicking on an order# from the table on the single-user page, in the User component
// we'll reuse this for our CART component, with extra functionality

import React from 'react'
import { connect } from 'react-redux'

// ----- single-order component -----

export const OrderDetail = (props) => {
  console.log('props', props)

  return (
    <div className="container">
      <h3>Details for Order #{props.selectedOrder.id}</h3>
    </div>
  )
}

// ----- single-order container -----
const mapStateToProps = (state) => ({
  // I think we'll also want something about the user on state
  selectedOrder: state.orders.selected,
  products: state.products.list
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)
