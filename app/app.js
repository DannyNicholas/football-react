import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FixtureList } from './components/FixtureList'
import { App } from './components/App'
import reducer from './store/reducer'
  
let store = createStore(reducer)
      
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);