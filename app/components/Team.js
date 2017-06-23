import React from 'react'

const Team = ( {team} ) => {

    const handleChkChange = e => this.setState({ teamSelected: !this.state.teamSelected })

    console.log(team)

    // replace with CSS class
    const imgStyle = {
      minHeight: '50px',
      height: '50px',
      maxWidth: '100%',
      maxHeight: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    return (
       <tr>
        <td><img src={team.badgeUrl} alt={team.teamName} style={imgStyle}/></td>
        <td>{team.teamName}</td>
        <td><input type="checkbox" checked={team.selected} onChange={handleChkChange}/></td>
      </tr>
    )
}

Team.propTypes = {
  team: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    teamName: React.PropTypes.string.isRequired,
    badgeUrl: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired
    }).isRequired
}
  
export default Team 