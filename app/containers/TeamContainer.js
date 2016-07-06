import { connect } from 'react-redux'
import TeamList from '../components/TeamList'

const allTeams = [
     {
            "id": 1,
            "teamName": "tottenham hotspur",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
        },
        {
            "id": 2,
            "teamName": "Manchester United FC",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
        }
]

const mapStateToProps = (state) => {
    return {
        teams: allTeams
    }
}


const TeamContainer = connect (
    mapStateToProps
)(TeamList)

export default TeamContainer