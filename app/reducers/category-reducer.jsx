import axios from 'axios'

/* =============== actions ==================== */

const GET_CATEGORIES = 'GET_CATEGORIES'
const SELECT_CATEGORY = 'SELECT_CATEGORY'

/* =============== action creators ============ */

export const get = (categories) => ({ type: GET_CATEGORIES, categories })
export const select = (category) => ({ type: SELECT_CATEGORY, category })

/* =============== reducer =================== */

const initialCategoryState = {
  list: [],
  selected: {}
}

export default function reducer(state = initialCategoryState, action) {
  // const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_CATEGORIES:
    return Object.assign({}, state, {list: action.categories})
  case SELECT_CATEGORY:
    return Object.assign({}, state, {selected: action.category})
  default:
    return initialCategoryState
  }
}

/* =============== dispatchers ================ */

export const fetchCategories = () => dispatch => {
  axios.get('/api/categories')
  .then(res => {
    dispatch(get(res.data))
  })
  .catch(err => console.error('Error fetching categories :(', err))
}

export const fetchCategory = (id) => dispatch => {
  axios.get(`/api/categories/${id}`)
  .then(res => dispatch(select(res.data)))
  .catch(err => console.error('Error fetching category :(', err))
}
