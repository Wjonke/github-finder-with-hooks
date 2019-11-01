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
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  ////////////////////search users//////////////////////
  const searchUsers= async text => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })

    console.log(res.data)
  }

  //////////////////get a single user///////////////////
  const getUser = async (userName) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  
    dispatch({
      type: GET_USER,
      payload: res.data
    })
    
  }


  
  /////////////////////get repos////////////////////////


  ////////////////////clear users///////////////////////
 
 const clearUsers= () => dispatch({ type: CLEAR_USERS });

  ////////////////////set loading///////////////////////
const setLoading = () => dispatch({ type: SET_LOADING });



  return <githubContext.Provider
    value={ {
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,

      searchUsers,
      clearUsers,
      getUser,
    } }
  >
    
    {props.children}

  </githubContext.Provider>
}

export default GithubState;