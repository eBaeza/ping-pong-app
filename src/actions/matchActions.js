import * as types from './types/match'
import { MatchService } from '../api/MatchService'

/**
 * Actions Creators
 */

function fetchMatchesSuccess (matches) {
  return {
    type: types.FETCH_MATCHES_SUCCESS,
    payload: matches
  }
}

function fetchMatchesFailure (error) {
  return {
    type: types.FETCH_MATCHES_FAILURE,
    payload: error
  }
}

function fetchMatchSuccess (match) {
  return {
    type: types.FETCH_MATCH_SUCCESS,
    payload: match
  }
}

function fetchMatchFailure (error) {
  return {
    type: types.FETCH_MATCH_FAILURE,
    payload: error
  }
}

function saveMatchSuccess () {
  return {
    type: types.SAVE_MATCH_SUCCESS
  }
}

function saveMatchFailure (error) {
  return {
    type: types.SAVE_MATCH_FAILURE,
    payload: error
  }
}

/**
 * @async Actions Creators
 */

export function fetchMatches () {
  return async (dispatch) => {
    dispatch(() => ({
      type: types.FETCH_MATCHES_INIT
    }))

    try {
      const { data } = await MatchService.index()
      dispatch(fetchMatchesSuccess(data))
    } catch (error) {
      dispatch(fetchMatchesFailure(error))
    }
  }
}

export function fetchMatch (matchId) {
  return async (dispatch) => {
    dispatch(() => ({
      type: types.FETCH_MATCH_INIT
    }))

    try {
      const { data } = await MatchService.show(matchId)
      return dispatch(fetchMatchSuccess(data))
    } catch (error) {
      return dispatch(fetchMatchFailure(error))
    }
  }
}

export function saveMatch (match) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: types.SAVE_MATCH_INIT
      }
    })

    try {
      await MatchService.store(match)
      return dispatch(saveMatchSuccess())
    } catch (error) {
      return dispatch(saveMatchFailure(error))
    }
  }
}
