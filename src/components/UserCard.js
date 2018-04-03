import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Media, MediaLeft, MediaContent, Title, Subtitle } from 'bloomer'
import Icon from '@fortawesome/react-fontawesome'

const UserCard = ({ username, email }) => {
  return (
    <Card>
      <CardContent>
        <Media>
          <MediaLeft>
            <Icon icon="user-circle"/>
          </MediaLeft>
          <MediaContent>
            <Title isSize={6}>@{username}</Title>
            <Subtitle isSize={6}>{email}</Subtitle>
          </MediaContent>
        </Media>
      </CardContent>
    </Card>
  )
}

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default UserCard
