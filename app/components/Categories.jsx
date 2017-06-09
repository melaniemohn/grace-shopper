import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// MPM COME BACK TO THIS
// instead of making a page for all our categories, let's just put this in the navbar or sidebar?

// ----- categories component -----

export const Categories = (props) => {
  console.log('props', props)
  // const categories = props.categories
  // console.log('categories??', categories)
  console.log('categories??', props.categories)

  return (
    <div>
      <h2>Browse our internet cafe by selecting a category!</h2>
      <ul>
        {
          props.categories.map(category => (
              <div key={category.id}>
                <Link to={`/categories/${category.id}`}>
                <h3>{category.name}</h3>
                </Link>
              </div>
            )
          )
        }
      </ul>
    </div>
  )
}

// ----- categories container -----
const mapStateToProps = (state) => ({categories: state.categories.list})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
