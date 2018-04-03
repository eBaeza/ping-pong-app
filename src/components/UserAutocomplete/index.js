import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import './styles.css'
import { UserService } from '../../api/UserService'
import UserCard from '../UserCard'

class UserAutocomplete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      users: [],
      selectedUser: null
    }

    this.onChange = this.onChange.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  render () {
    const inputProps = {
      placeholder: 'Type the username or email of the user',
      value: this.state.query,
      onChange: this.onChange
    }

    return (
      <div>
        <Autosuggest
          suggestions={this.state.users}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={user => ( <UserCard {...user} /> )}
          inputProps={inputProps}
        />

        { this.state.selectedUser && <UserCard {...this.state.selectedUser} /> }
      </div>
    )
  }

  onChange (event, { newValue }) {
    this.setState({ query: newValue })
  }

  getSuggestionValue(user) {
    this.setState({ selectedUser: user })
    this.props.onSelect(user)
    return user.username
  }

  async onSuggestionsFetchRequested ({ value }) {
    this.setState({ selectedUser: null })
    this.props.onSelect(null)
    const { data: users } = await UserService.search(value)
    this.setState({ users })
  }

  onSuggestionsClearRequested () {
    this.setState({ users: [] })
  }
}

export default UserAutocomplete
