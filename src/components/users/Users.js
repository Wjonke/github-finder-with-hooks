import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'



const Users = ( {users, loading} ) => {
  if(loading) {
    return <Spinner/>
  }else{
    return (

      <div style={userStyle}>
                                    {/*this is where we will map through the ""users"" to create a new array of users and pass each user via props to UserItem - users is being passed down from App.js from the api request via props*/}
      {users.map(user => 
        (<UserItem key={user.id} user={user}/>
      ))}

      </div>
    );
  }
}

//styling and propTypes below----------------------------------

const userStyle={
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}

Users.propTypes= {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default Users
