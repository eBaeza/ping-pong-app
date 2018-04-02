import * as types from './types/user'
import { UserService } from '../api/UserService'

/**
 * Actions Creators
 */

function fetchUsersSuccess (users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users
  }
}

function fetchUsersFailure (error) {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error
  }
}

/**
 * @async Actions Creators
 */

export function fetchUsers () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: types.FETCH_USERS_INIT
      }
    })

    try {
      const { data } = await UserService.index()
      dispatch(fetchUsersSuccess(data))
    } catch (error) {
      dispatch(fetchUsersFailure(error))
    }
  }
}
