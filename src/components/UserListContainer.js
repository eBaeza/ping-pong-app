import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'

import { Columns, Column, Content, Button } from 'bloomer'
import Icon from '@fortawesome/react-fontawesome'
import UserList from './UserList'

class UserListContainer extends Component {
  render() {
    return (
      <div>
        <Columns>
          <Column>
            <Content>
              <h2><Link to='matches'>Matches</Link></h2>
              <p>Top 20 ping pong players</p>
            </Content>
          </Column>
          <Column className='has-text-right'>
            <Button isColor='primary'>
              <span>NEW MATCH</span>
              <span className="icon is-small">
                <Icon icon='plus'></Icon>
              </span>
            </Button>
          </Column>
        </Columns>
        <UserList users={this.props.users} loading={this.props.loading} />
      </div>
    )
  }

  async componentWillMount() {
    await this.props.userActions.fetchUsers()
  }
}

UserListContainer.defaultProps = {
  users: []
}

UserListContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  userActions: PropTypes.objectOf(PropTypes.func).isRequired,
}

function mapStateToProps({ userList: { users, loading } }) {
  return {
    users,
    loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer)
