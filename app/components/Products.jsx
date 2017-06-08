import React from 'react'
import { Link } from 'react-router'

export default function Products(props) {
  const products = props.products
  return (
    <div>
      <h3>Products</h3>
      <div className="list-group">
      </div>
    </div>
  )
}
