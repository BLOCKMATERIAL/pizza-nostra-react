import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import {createStore} from 'redux'
import App from './App';


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);

store.subscribe( () => console.log ('хранилище измн', store.getState()));

console.log(store.getState());
store.dispatch({ type : 'INCREMENT'});

ReactDOM.render(

  <Router>
    <App/>
  </Router>,
  


  document.getElementById('root'),
);
