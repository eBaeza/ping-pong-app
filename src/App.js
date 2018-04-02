import React, { Component } from 'react'
import { Section, Container } from 'bloomer'
import Header from './components/common/Header'
class App extends Component {
  render() {
    const NestedComponent = this.props.component

    return (
      <div>
        <Header />
        <Section>
          <Container>
            <NestedComponent />
          </Container>
        </Section>
      </div>
    )
  }
}

export default App
