import * as types from '../actions/types/user'
import initialState from './initialState'

export default function userListReducer (state = initialState.userList, action) {
  switch (action.type) {

    case types.FETCH_USERS_INIT:
      return {
        ...state,
        loading: true,
        error: null
      }

    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
        loading: false
      }

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
        loading: false
      }

    default:
      return state

  }
}
