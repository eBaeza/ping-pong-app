import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({
  id,
  username,
  total_matches,
  won_matches,
  lost_matches,
  percentage_won_matches
}) => {
  return (
    <tr>
      <td>{ username }</td>
      <td>{ total_matches }</td>
      <td>{ won_matches }</td>
      <td>{ lost_matches }</td>
      <td>{ percentage_won_matches } % </td>
    </tr>
  )
}

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  total_matches: PropTypes.number.isRequired,
  won_matches: PropTypes.number.isRequired,
  lost_matches: PropTypes.number.isRequired,
  percentage_won_matches: PropTypes.number.isRequired
}

export default UserItem
