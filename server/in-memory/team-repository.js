/*
 * Temporary In-Memory Repository
 * to provide static responses. 
 */

const allTeams = [
     {
            "id": 1,
            "name": "tottenham hotspur",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
        },
        {
            "id": 2,
            "name": "Manchester United FC",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
        }
];

const goals = [
        {
            "date": "2015-11-03T19:45:00Z",
            "goalsScored": "2",
            "goalsConceded": "5"
        },
        {
            "date": "2015-11-103T19:45:00Z",
            "goalsScored": "4",
            "goalsConceded": "2"
        }
];

const teamRepository = {
    getAll: () => allTeams,
    getGoals: (teamId) => goals
}

module.exports = { teamRepository }