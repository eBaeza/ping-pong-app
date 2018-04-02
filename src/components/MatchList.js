import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'bloomer'
import Icon from '@fortawesome/react-fontawesome'
import MatchItem from './MatchItem'

const MatchList = ({ matches, loading }) => {
  return (
    <Table className={'is-hoverable'} isFullWidth isStriped isBordered>
      <thead>
        <tr>
          <th>
            <span className="icon">
              <Icon icon="user"/>
            </span> Local
          </th>
          <th>
            <span className="icon">
              <Icon icon="table-tennis"/>
            </span>
          </th>
          <th>
            <span className="icon">
              <Icon icon="table-tennis"/>
            </span>
          </th>
          <th>
            <span className="icon">
              <Icon icon="user"/>
            </span> Visitor
          </th>
          <th>
            <span className="icon">
              <Icon icon="calendar-alt"/>
            </span> Date match
          </th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? <span>Loading...</span> :
            matches.map(match => (
              <MatchItem key={match.id} {...match}></MatchItem>
            ))
        }
      </tbody>
    </Table>
  )
}

MatchList.propTypes = {
  macthes: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
}

export default MatchList
