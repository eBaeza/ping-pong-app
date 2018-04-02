import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as matchActions from '../actions/matchActions'
import { Columns, Column, Content } from 'bloomer'
import MatchList from './MatchList'

class MatchListContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Columns>
          <Column>
            <Content>
              <h2>Matches</h2>
              <Link to='/'>User statics</Link>
            </Content>
          </Column>
        </Columns>
        <MatchList matches={this.props.matches} loading={this.props.loading} />
      </div>
    )
  }

  async componentWillMount() {
    await this.props.matchActions.fetchMatches()
  }
}

MatchListContainer.defaultProps = {
  matches: []
}

MatchListContainer.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  matchActions: PropTypes.objectOf(PropTypes.func).isRequired,
}

function mapStateToProps({ matchList: { matches, loading } }) {
  return {
    matches,
    loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    matchActions: bindActionCreators(matchActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchListContainer)
