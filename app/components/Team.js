import React from 'react'

export default class Team extends React.Component {

  constructor() {
    super()
    this.state = { teamSelected: false }
  }

  render() {

    const handleChkChange = e => this.setState({ teamSelected: !this.state.teamSelected })

    console.log(this.props.teamName)
    console.log(this.state)

    return (
        <li>
            <img src={this.props.badgeUrl} alt="boohoo" className="img-responsive"/>
            {this.props.badgeUrl}
            {this.props.teamName}
            <input type="checkbox" checked={this.state.teamSelected} onChange={handleChkChange}/>
        </li>
    )
  }
}

  Team.propTypes = {
    teamName: React.PropTypes.string.isRequired,
    badgeUrl: React.PropTypes.string.isRequired
  }