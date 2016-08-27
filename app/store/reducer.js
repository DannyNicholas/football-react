import { Map, fromJS } from 'immutable'

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


export default function (state = Map(), action) {
  switch (action.type) {
    case 'ADD_GOALS':
      return addGoals(state, action.id, action.goals)
    default:
      return state
  }}