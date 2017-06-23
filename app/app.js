import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FixtureList } from './components/FixtureList'
import { App } from './components/App'
import reducer from './store/reducer'
import { setState } from './store/action-creators'

const allTeams = [
     {
            "id": 1,
            "teamName": "tottenham hotspur",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
            "selected": false,
        },
        {
            "id": 2,
            "teamName": "Manchester United FC",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
            "selected": false,
        }
]

const store = createStore(reducer)
store.dispatch(setState({ teams: allTeams }))

// temp output to check contents of initial store
const teams = store.getState()
console.log(JSON.stringify([...teams]))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
