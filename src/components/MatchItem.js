import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const MatchItem = ({
  id,
  player_id,
  opponent_id,
  player_score,
  opponent_score,
  result,
  player,
  opponent,
  created_at
}) => {
  return (
    <tr>
      <td> { player.username }</td>
      <td>{player_score}</td>
      <td>{opponent_score}</td>
      <td> { opponent.username }</td>
      <td>{ moment(created_at).format('DD/MM/YY hh:mm a') }</td>
    </tr>
  )
}

const playerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired

MatchItem.propTypes = {
  id: PropTypes.number.isRequired,
  player_id: PropTypes.number.isRequired,
  opponent_id: PropTypes.number.isRequired,
  player_score: PropTypes.number.isRequired,
  opponent_score: PropTypes.number.isRequired,
  result: PropTypes.string.isRequired,
  player: playerType,
  opponent: playerType,
  created_at: PropTypes.instanceOf(Date),
}

export default MatchItem
