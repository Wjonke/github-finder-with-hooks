import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

 const UserItem = ({user: {login, avatar_url, html_url}} ) => {
  //props is passed in here ^^^^ to give the rest of the function access to them. props will equal the info in ()
  //user comes from Users.js from the mapped users, we are specifying it to = the props in {}

  return (

    <div className ="card text-center">

      <img src={avatar_url} 
        alt="avatar" 
        className='round-img' 
        style={{width: '60px'}} 
      />

      <h3> {login} </h3>

      <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" > See More! </Link>
      </div>

    </div>
  )
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
