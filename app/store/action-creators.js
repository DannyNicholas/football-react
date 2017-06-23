/*
* Structure of data
* teams : {
    team1 : {
        goals : [{goals1},{goals2}]
    }
}


*/

// action to add an array of goals to a specified team
export function addGoals(id, goals) {
    return {
        id,
        type: 'ADD_GOALS',
        goals
    }
}

export function setState(newState) {
    return {
        type: 'SET_STATE',
        newState
    }
}

export function selectTeam(id) {
    return {
        type: 'SELECT_TEAM',
        id,
    }
}

export function deselectTeam(id) {
    return {
        type: 'DESELECT_TEAM',
        id,
    }
}

export function selectAllTeams() {
    return {
        type: 'SELECT_ALL_TEAMS',
    }
}

export function deselectAllTeams() {
    return {
        type: 'DESELECT_ALL_TEAMS',
    }
}