import React, { PropTypes } from 'react'
import { Grid, Button, Table, Col, ButtonToolbar } from 'react-bootstrap'
import { List } from 'immutable'
import Team from './Team'

// replace with CSS class
const imgStyle = {
    minHeight: '50px',
    height: '50px',
    maxWidth: '100%',
    maxHeight: '100%',
    marginLeft: 'auto',
marginRight: 'auto',
};

const TeamList = ({ teams }) => {
    

console.log(teams)
    const teamsArray = teams.toJS()
    console.log(teamsArray)

    return (

    <div>

    <ButtonToolbar>
    <Button bsStyle="success">All On</Button>
    <Button bsStyle="danger">All Off</Button>
    </ButtonToolbar>


<Col xs={3}>
    <Table responsive condensed>
        <thead>
            <tr>
                <th>Logo</th>
                <th>Team</th>
                <th>On/Off</th>
            </tr>
            </thead>
            <tbody>



    {teamsArray.map(team => 
    <Team key={team.id} team={team}/>
    )}

    </tbody>
  </Table>
  </Col>
    </div>
)}

TeamList.propTypes = {
   teams: PropTypes.instanceOf(List).isRequired
}

export default TeamList