import axios from 'axios'

/* ------------------ actions ------------------------ */

const GET_USERS = 'GET_USERS'
const SELECT_USER = 'SELECT_USER'
const DELETE_USER = 'DELETE_USER'

/* ------------------ action creators ---------------- */

export const get = (users) => ({ type: GET_USERS, users })
export const select = (user) => ({ type: SELECT_USER, user })
export const remove = (user) => ({ type: DELETE_USER, user })

/* ------------------ reducer ------------------------ */

const initialUsersState = {
  list: [],
  selected: {}
}

const reducer = (state = initialUsersState, action) => {
  switch (action.type) {
  case GET_USERS:
    return Object.assign({}, state, {list: action.users})
  case SELECT_USER:
    return Object.assign({}, state, {selected: action.user})
  case DELETE_USER:
    return Object.assign({}, state, {list: state.list.filter(user => user.id !== action.user)})
  default:
    return initialUsersState
  }
}

/* ------------------ dispatchers ------------------- */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
  .then(res => {
    dispatch(get(res.data))
  })
  .catch(err => console.error('Error fetching users :(', err))
}

export const fetchUser = (id) => dispatch => {
  axios.get(`/api/users/${id}`)
  .then(res => dispatch(select(res.data)))
  .catch(err => console.error('Error fetching user :(', err))
}

export const removeUser = (id) => dispatch => {
  dispatch(remove(id))
  axios.delete(`api/users/${id}`)
  // .then()
  .catch(err => console.error(`Failed to remove user: ${id}`, err))
}

export default reducer
