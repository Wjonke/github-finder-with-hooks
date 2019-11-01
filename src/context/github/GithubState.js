import React, { useReducer } from 'react';
import axios  from "axios";

import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_ALERT,
  SET_LOADING,
  REMOVE_ALERT
} from'../types'



const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //search users


  //get a single user

  
  //get repos


  //clear users


  //set loading//




  return <githubContext.Provider
    value={ {
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,


    } }
  >
    
    {props.children}

  </githubContext.Provider>
}

export default GithubState;