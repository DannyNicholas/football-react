import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Button, Table, Col, ButtonToolbar } from 'react-bootstrap'
import TeamList from './TeamList'
import * as actionCreators from '../store/action-creators'

const handleSelectAllTeams = () => selectAllTeams()
const handleDeselectAllTeams = () => deselectAllTeams()


//const TeamList = ({ dispatch }) => (



export default class TeamSelector extends React.Component {

  constructor() {
    super()
    this.state = { 
      allSelected: false,
    }
  }

/**
  selectAllTeams() {
    console.log('select all teams')
    console.log(this.props.teams)
    const updatedTeams = this.props.teams.map(team => {
      console.log(team)
      team.selected = 'true'
      return team;
    })
    console.log(updatedTeams)
     console.log(this.props.teams)
    
    this.setState({ allSelected: true })
  } 
*/


  render() {

console.log(this.props)

    const handleAllOn = e => this.props.selectAllTeams
    const handleAllOff = e => this.props.deselectAllTeams()

    const imgStyle = {
      minHeight: '50px',
      height: '50px',
      maxWidth: '100%',
      maxHeight: '100%',
      marginLeft: 'auto',
    marginRight: 'auto',
    };

    //console.log(this.props.teamName)
    console.log(this.state)

    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="success" onClick={handleAllOn} active>All On</Button>
          <Button bsStyle="danger" onClick={handleAllOff} active>All Off</Button>
        </ButtonToolbar>

        <TeamList teams={this.props.teams} initialTeamsSelected={this.state.allSelected}/>
      </div>
    )
  }
}

/**
TeamSelector.propTypes = {
  selectAllTeams: React.PropTypes.func.isRequired,
  deselectAllTeams: React.PropTypes.func.isRequired,
}
*/

function mapStateToProps(state) {
  return {
    teams: state.get('teams'),
  }
}

  function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAllTeams: actionCreators.selectAllTeams,
    deselectAllTeams: actionCreators.deselectAllTeams,
  }, dispatch)
}

export const TeamSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSelector)
