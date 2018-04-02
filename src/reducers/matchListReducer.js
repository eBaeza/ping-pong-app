import * as types from '../actions/types/match'
import initialState from './initialState'

export default function matchListReducer (state = initialState.matchList, action) {
  switch (action.type) {

    case types.FETCH_MATCHES_INIT:
      return {
        ...state,
        loading: true,
        error: null
      }

    case types.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        matches: [],
        error: action.payload,
        loading: false
      }

    case types.FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload,
        error: null,
        loading: false
      }

    case types.SAVE_MATCH_INIT:
      return {
        ...state,
        loading: true,
        error: null
      }

    case types.SAVE_MATCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case types.SAVE_MATCH_SUCCESS:
      return {
        ...state,
        matches: [...state.matches, action.payload],
        error: null,
        loading: false
      }

    default:
      return state

  }
}
