import { Map, fromJS } from 'immutable'

function changeTeam(state, id) {
  return state.set('currentTeam', Map().set('teamId', id))
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'CHANGE_TEAM':
      return changeTeam(state, action.id)
    default:
      return state
  }}