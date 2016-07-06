import React, { PropTypes } from 'react'

const Team = ({ id, teamName, badgeUrl }) => (
    <li>
        {teamName}
    </li>
)

Team.propTypes = {
    teamName: PropTypes.string.isRequired,
    badgeUrl: PropTypes.string.isRequired
}

export default Team