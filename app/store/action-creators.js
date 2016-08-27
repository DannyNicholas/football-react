/*
* Structure of data
* teams : {
    team1 : {
        goals : [{goals1},{goals2}]
    }
}


*/

// action to add an array of goals to a specified team
export function addGoals(teamId, goals) {
    return {
        teamId,
        type: 'ADD_GOALS',
        goals
    }
}