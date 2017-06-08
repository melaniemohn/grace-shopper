// MPM FIX - eventually move this to new containers directory in app > containers
// again, changing directory structure means this route needs to change after pulling from master
import Category from '../components/Category'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state.products.list,
    selected: state.category.selected
  }
}

// because I'm still fuzzy on it, could this look like...
// const mapState = ({ selectedCategory, products }) => ({ selectedCategory, products })

const CategoryContainer = connect(mapStateToProps)(Category)

export default CategoryContainer
