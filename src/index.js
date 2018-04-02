import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from "./store"
import initialState from "./reducers/initialState"
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
const store = createStore(initialState)
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUyMjY1MjM5NX0.YDsNWQhXrqBrRK5LH3evcGUhnkdsH1phrxtfR3aUr_k')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
