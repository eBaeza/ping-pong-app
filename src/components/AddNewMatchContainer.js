import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Box, Columns, Column, Field, Control, Button,
  Input, Icon, Label, Content, Title, Help, Notification
} from 'bloomer'
import FAIcon from '@fortawesome/react-fontawesome'
import UserAutocomplete from './UserAutocomplete'
import { MatchService } from '../api/MatchService'

class AddNewMatchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      local: null,
      opponent: null,
      localScore: 0,
      opponentScore: 0,
      error: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    return (
      <Box>
        <Content> <Title>Create new match</Title> </Content>
        <Columns>
          <Column isSize='1/2'>
            <Field>
              <Label>Local Player</Label>
              <Control hasIcons>
                <UserAutocomplete
                  onSelect={user => { this.onSelectUser(user) }}
                />
              </Control>
              {!this.state.local && <Help isColor='danger'>Select the local player</Help> }
            </Field>

            <Field>
              <Label>Score</Label>
              <Control hasIcons>
                <Icon isSize='small' isAlign='left'>
                  <FAIcon icon='table-tennis'/>
                </Icon>
                <Input type="number" placeholder='0' name='localScore' onChange={this.handleInputChange} />
              </Control>
            </Field>
          </Column>

          <Column isSize='1/2'>
            <Field>
              <Label>Visitor Player</Label>
              <Control hasIcons>
                <UserAutocomplete
                  onSelect={user => { this.onSelectUser(user, 'v') }}
                />
              </Control>
              {!this.state.opponent && <Help isColor='danger'>Select the visitor player</Help>}
            </Field>

            <Field>
              <Label>Score</Label>
              <Control hasIcons>
                <Icon isSize='small' isAlign='left'>
                  <FAIcon icon='table-tennis'/>
                </Icon>
                <Input type="number" placeholder='0' name='opponentScore' onChange={this.handleInputChange}/>
              </Control>
            </Field>
          </Column>
        </Columns>

        {this.state.error && <Notification isColor='danger'>{this.state.error}</Notification>}

        <Field isGrouped>
          <Control>
            <Button isColor='primary'  onClick={() => { this.onSubmitMatch() }}>Submit</Button>
          </Control>

          <Control>
            <Button href='/'>Cancel</Button>
          </Control>
        </Field>
      </Box>
    )
  }

  onSelectUser(user, type = 'l') {
    if (type === 'l') {
      this.setState({ local: user })
    }

    if (type === 'v') {
      this.setState({ opponent: user })
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: +value
    })
  }

  async onSubmitMatch() {
    const { local, opponent, localScore, opponentScore } = this.state

    if (!this.validateForm()) { return }

    await MatchService.store({
      player_id: local.id,
      opponent_id: opponent.id,
      player_score: localScore,
      opponent_score: opponentScore
    })

    this.props.history.push('/matches')
  }

  validateForm() {
    this.setState({ error: '' })

    const { local, opponent } = this.state

    if (!local || !opponent) {
      this.setState({ error: 'Select the 2 players' })
      return false
    }

    if (local.id === opponent.id) {
      this.setState({ error: 'The opponet player must not be equal to the local player' })
      return false
    }

    return true
  }
}

export default withRouter(AddNewMatchContainer)
