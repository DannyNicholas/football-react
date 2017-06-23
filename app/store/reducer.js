import { Map, fromJS } from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

/*
 * Reducers
 * Take the current state and an action -> return the next state
 * State changes use pure functions.
 * State is immutable so current state must not be modified
 */

// set the goals for the wanted team. merge the updated team into the overall teams state
function addGoals(state, id, goals) {
  const team = state.getIn(['teams', id]).goals = goals
  return state.merge(team)
}

// add the supplied team with the supplied id
// if the id already exists, replace the team
function addTeam(state, id, team) {
  //TBC
}

// remove the team with the supplied id
// no action if team id does not exist
function removeTeam(state, id) {
  //TBC
}

function selectAllTeams(state) {
  const updatedTeams = state.get('teams').map(team => team.selected = 'true')
  return state.set('teams', updatedTeams)
}

function deselectAllTeams(state) {
  const updatedTeams = state.get('teams').map(team => team.selected = 'false')
  return state.set('teams', updatedTeams)
}

function selectTeam(state, id) {
  // check if team id exists
  const index = state.get('teams').findIndex(t => t.get('id') === id)

  if (index >= 0) {
    return state
  }

// TBC
  return state.set('teams', state.get('tech').push(fromJS(item)))
}

function deselectTeam(state, id) {
  // check if team id exists
  const index = state.get('teams').findIndex(t => t.get('id') === id)

  if (index >= 0) {
    return state
  }

// TBC
  return state.set('teams', state.get('tech').push(fromJS(item)))
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.newState)
    case 'ADD_GOALS':
      return addGoals(state, action.id, action.goals)
    case 'SELECT_ALL_TEAMS':
      return selectAllTeams(state)
    case 'DESELECT_ALL_TEAMS':
      return deselectAllTeams(state)
    case 'SELECT_TEAM':
      return selectTeam(state, action.id)
    case 'DESELECT_TEAM':
      return deselectTeam(state, action.id)
    default:
      return state
  }}