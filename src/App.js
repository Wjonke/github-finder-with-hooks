import React , {useState} from 'react';
import axios from 'axios';
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
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
 



  //Get a single user from github and display their data
  const getUser = async (userName) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUser(res.data)
    setLoading(false)
    console.log(user)
  }

  //get top 5 user repos
  const getUserRepos = async (userName) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false)
    console.log(user)
  }

  //clear users from state
  const clearUsers= () => {
    setUsers([])
    setLoading(false)
  }

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
              <Search  
                clearUsers= {clearUsers} 
                showClear={users.length > 0 ? true : false}
                setAlert={showAlert}
              />
                
              <Users /> 
            </>
          )} />
          
          <Route exact path='/about' component= {About} />

          <Route exact path='/user/:login' render={ props => (
            
              <User 
                { ...props } 
                getUser={getUser} 
                getUserRepos={getUserRepos} 
                user={user} 
                repos={repos} 
                loading={loading} 
              />
            
          )} />

          </Switch>
        </div>
      </div>
    );
};
export default App;