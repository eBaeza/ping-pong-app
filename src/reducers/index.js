import { combineReducers } from 'redux'
import userList from './userListReducer'
import matchList from './matchListReducer'

const rootReducer = combineReducers({
  userList,
  matchList,
})

export default rootReducer
