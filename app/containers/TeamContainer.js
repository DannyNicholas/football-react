import { connect } from 'react-redux'
import TeamSelectorContainer from '../components/TeamSelector'

const mapStateToProps = (state) => {
    
    console.log(JSON.stringify(state.get('teams')))
    return {
        teams: state.get('teams')
    }
}

const TeamContainer = connect (
    mapStateToProps
)(TeamSelectorContainer)

export default TeamContainer