import React from 'react'
import { Link } from 'react-router'

export default function Products (props) {

  const products = props.products;

  return (
    <div>
      <h3>Products</h3>
      <div className="list-group">
      {
        Object.keys(stations).map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}
