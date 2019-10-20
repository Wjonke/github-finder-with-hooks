import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'


export const User = ( {user, loading, getUser, getUserRepos, repos, match} ) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

    const {
      name, 
      avatar_url, 
      location, 
      bio, 
      blog,
      company, 
      login,   
      followers, 
      following, 
      public_repos, 
      public_gists, 
      hireable,
    } = user;

    
    
    
    if(loading) return <Spinner />;

    return (
      <>
        <Link to='/' className="btn btn-dark btn-sm my-1"> Back to Search </Link>
            Hireable? : {'  '}

            {hireable ? (
              <i className='fas fa-check text-success' /> 
              ) : (
              <i className='fas fa-times-circle text-danger'/> 
            )}

        <div className ="card grid-2">

          <div className ="all-center">
            <img src={avatar_url} 
              alt="avatar" 
              className='round-img' 
              style={{width: '150px'}} 
            />   
            <h1>{name}</h1>
            <p>{location}</p>
          </div>

          <div>
            <a href="{html_url}" className='btn btn-dark my-1'>Visit My GitHub Profile</a>

            {bio && (
              <> 
                <h3>Bio</h3> 
                <p>{bio}</p> 
              </>
            )}

            <ul>
              <li>
                {login && (
                  <> 
                    <strong>GitHub Username:{' '} </strong> 
                    {login} 
                  </>
                )}
              </li>

              <li>
              {company && (
                  <> 
                    <strong>Company:{' '} </strong> 
                    {company} 
                  </>
                )}
              </li>

              <li>
              {blog && (
                  <> 
                    <strong>Website:{' '} </strong> 
                    {blog} 
                  </>
                )}
              </li>
            </ul>
            
          </div>
        </div>

        <div className='card text-center'>
          <div className="badge badge-primary">Followers: {followers} </div>
          <div className="badge badge-success">Following: {following} </div>
          <div className="badge badge-light">Public Repos: {public_repos} </div>
          <div className="badge badge-dark">Public Gists: {public_gists} </div>
        </div>
        
        <Repos repos={user.repos} />
      </>
    )
}
User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos:PropTypes.array.isRequired,
}

export default User
