import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router}  from 'react-router-dom';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


ReactDOM.render(
  <GithubState>
    <AlertState>
      <Router> 
        <App />  
      </Router>
    </AlertState>
  </GithubState>, 
document.getElementById('root'));

