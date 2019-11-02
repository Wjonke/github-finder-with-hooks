import React from 'react';
import {Switch, Route}  from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import User from './components/users/User';
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css';


const App = () => {

    return (
      <div className="App">

        <Navbar />     
        <Alert  />

        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
          </Switch>
        </div>
      </div>
    );
};
export default App;