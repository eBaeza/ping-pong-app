import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import 'bulma/css/bulma.css'
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeLib from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import registerServiceWorker from './registerServiceWorker'
import createStore, { history } from './store'
import initialState from './reducers/initialState'
import App from './App'
import UserListContainer from './components/UserListContainer'

const store = createStore(initialState)

fontawesome.library.add(fontawesomeLib, brands)

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUyMjY1MjM5NX0.YDsNWQhXrqBrRK5LH3evcGUhnkdsH1phrxtfR3aUr_k')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' render={route => (
          <App component={UserListContainer}/>
        )} />
        <Route path='/matches' component={UserListContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
