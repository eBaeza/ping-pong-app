import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import fontawesome from '@fortawesome/fontawesome'
import fontawesomeLib from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import { Section, Container } from 'bloomer'

import Header from './components/common/Header'
import UserListContainer from './components/UserListContainer'

fontawesome.library.add(fontawesomeLib, brands)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section>
          <Container>
            <UserListContainer />
          </Container>
        </Section>
      </div>
    )
  }
}

export default App
