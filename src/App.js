import React , {Component} from 'react';
import axios from 'axios';
import {Switch, Route}  from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css';


class App extends Component {
  state= {
    users: [],
    user:{},
    repos:[],
    loading: false,
    alert:null
  }

  async componentDidMount() {
    this.setState({ loading: true}) //sets up our loading spinner while we wait for data fetch

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading:false })

    console.log(this.state.users)
  }

//searching users via the call from the api to search users
  searchUsers= async text => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({ users:res.data.items, loading:false })
    console.log(this.state.users)
  }

  //Get a single user from github and display their data
  getUser = async (userName) => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ user:res.data, loading:false })
    console.log(this.state.user)
  }

  //get top 5 user repos
  getUserRepos = async (userName) => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ repos:res.data, loading:false })
    console.log(this.state.user)
  }


  
  //clear users from state
  clearUsers= () => {
    this.setState({users:[], loading:false})
  }

  //set off Alert if search is empty which disappears in 2 seconds
  setAlert= (msg, type) => {
    this.setState({alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000);
  }

  render() {
    return (
      <div className="App">

        <Navbar />     
        <Alert alert={this.state.alert} />

      <div className="container">
        <Switch>

          <Route exact path='/' render={props => (
            <>
              <Search 
                searchUsers= {this.searchUsers} 
                clearUsers= {this.clearUsers} 
                showClear={this.state.users.length > 0 ? true : false}
                setAlert={this.setAlert}
              />{/*passing down props of searchUsers, clearUsers and showClear*/}
                
              <Users 
                loading={this.state.loading} 
                users={this.state.users} 
              /> {/*passing down props of loading and users*/}
            </>
          )} />
          
          <Route exact path='/about' component= {About} />

          <Route exact path='/user/:login' render={ props => (
            
              <User 
                { ...props } 
                getUser={this.getUser} 
                getUserRepos={this.getUserRepos} 
                user={this.state.user} 
                repos={this.state.repos} 
                loading={this.state.loading} 
              />
            
          )} />

          </Switch>
        </div>
      </div>
    );
  };

};
export default App;