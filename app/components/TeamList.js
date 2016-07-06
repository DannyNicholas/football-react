import React, { PropTypes } from 'react'
import Team from './Team'

const TeamList = ({ teams }) => (
    <ul>
    {teams.map(team => 
    <Team key={team.id} {...team} />
    )}
    </ul>
)

TeamList.propTypes = {
   teams: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        teamName: PropTypes.string.isRequired,
        badgeUrl: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default TeamList