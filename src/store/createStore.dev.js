import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from  'react-router-redux'
import rootReducer from '../reducers'

export const history = createHistory()

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunk, createLogger())
)

export default function createAppStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
