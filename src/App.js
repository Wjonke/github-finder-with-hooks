import React , {useState} from 'react';
import {Switch, Route}  from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css';


const App = () => {
  //new useStates below after hooks
  const [alert, setAlert] = useState(null)
 
  //set off Alert if search is empty which disappears in 2 seconds
  const showAlert= (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

    return (
      <div className="App">

        <Navbar />     
        <Alert alert={alert} />

        <div className="container">
          <Switch>
            <Route exact path='/' render={props => (
              <>
                <Search setAlert={showAlert} />
                <Users /> 
              </>
              )} 
            />
          
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
          </Switch>
        </div>
      </div>
    );
};
export default App;