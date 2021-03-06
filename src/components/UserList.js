import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'bloomer'
import Icon from '@fortawesome/react-fontawesome'
import UserItem from './UserItem'

const UserList = ({
  users,
  loading
}) => {
  return (
    <Table className={'is-hoverable'} isFullWidth isStriped isBordered>
      <thead>
        <tr>
          <th>Player</th>
          <th>
            <span className="icon">
              <Icon icon="table-tennis"/>
            </span> Total Matches
          </th>
          <th>
            <span className="icon">
              <Icon icon="thumbs-up"/>
            </span> Won Matches
          </th>
          <th>
            <span className="icon">
              <Icon icon="thumbs-down"/>
            </span>Lose Matches
          </th>
          <th>
            <span className="icon">
              <Icon icon="trophy"/>
            </span> Won Matches %
          </th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? <span>Loading...</span> :
            users.map(user => (
              <UserItem key={user.id} {...user}></UserItem>
            ))
        }
      </tbody>
    </Table>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
}

export default UserList
