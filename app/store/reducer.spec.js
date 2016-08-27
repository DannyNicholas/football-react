
import reducer from './reducer'

describe('reducer', () => {
  describe('when ADD_GOALS action is dispatched', () => {

    const initialState = [
        {
            "id": 1,
            "name": "tottenham hotspur",
            "badgeUrl": "url1",
            "goals": []
        },
        {
            "id": 2,
            "name": "Manchester United FC",
            "badgeUrl": "url2",
            "goals": []
        }
    ]

    const stateToTransitionTo = [
        {
            "id": 1,
            "name": "tottenham hotspur",
            "badgeUrl": "url1",
            "goals": [
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
            ]
        },
        {
            "id": 2,
            "name": "Manchester United FC",
            "badgeUrl": "url2",
            "goals": []
        }
    ]

    const action = {
      type: 'ADD_GOALS',
      id: 1,
      goals: [
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
            ]
    }

    it('add goals to a team', () => {
      const nextState = reducer(initialState, action)
      const expectedState = fromJS(stateToTransitionTo)
      expect(nextState).to.deep.equal(expectedState)
    })
  })
})