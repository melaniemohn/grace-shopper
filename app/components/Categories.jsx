import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// ----- categories component -----

export const Categories = (props) => {
  const categories = props.categories

  return (
    <div className="container">
      <h2>Browse our internet cafe by selecting a category!</h2>
        {
          categories && categories.map(category => (
              <div className="col-xs-5" key={category.id}>
                <Link className="img-responsive" to={`/categories/${category.id}`}>
                  <img src={category.image}/>
                  <h3>{category.name}</h3>
                </Link>
              </div>
            )
          )
        }
    </div>
  )
}

// ----- categories container -----
const mapStateToProps = (state) => ({categories: state.categories.list})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
