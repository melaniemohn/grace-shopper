import Category from '../components/Category'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
    selectedCategory: state.categories.selected
  }
}

// because I'm still fuzzy on it, could this look like...
// const mapState = ({ selectedCategory, products }) => ({ selectedCategory, products })

const CategoryContainer = connect(mapStateToProps)(Category)

export default CategoryContainer
