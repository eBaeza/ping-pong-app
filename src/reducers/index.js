import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userList from './userListReducer'
import matchList from './matchListReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  userList,
  matchList,
})

export default rootReducer
