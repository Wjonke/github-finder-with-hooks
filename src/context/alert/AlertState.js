import React, { useReducer } from 'react';

import alertContext from './alertContext'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from'../types'

const AlertState = props => {

  const initialState = null; 

  const [state, dispatch] = useReducer(alertReducer, initialState)


 //set off Alert if search is empty which disappears in 2 seconds
  const setAlert= (msg, type) => {
    dispatch({
      type:SET_ALERT,
      payload: { msg, type }
    })
    setTimeout(() => { dispatch({ type: REMOVE_ALERT}) }, 2000);
  }




  return <alertContext.Provider
    value={ {
      alert: state,
      setAlert,

    } }
  >
    
    {props.children}

  </alertContext.Provider>
}

export default AlertState;