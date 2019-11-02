import React, { useReducer } from 'react';
import axios  from "axios";

import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
} from'../types'

//setting up env id and secret for deployment
let githubClientId;
let githubClientSecret;


if(process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
/////////////////////////////////////////////




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

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })

    console.log(res.data)
  }

  //////////////////get a single user///////////////////
  const getUser = async (userName) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
  
    dispatch({
      type: GET_USER,
      payload: res.data
    })
    
  }

  /////////////////////get repos////////////////////////
  const getUserRepos = async (userName) => {
    setLoading()

    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  
  }

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
      getUserRepos,
    } }
  >
    
    {props.children}

  </githubContext.Provider>
}

export default GithubState;