import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

export const Search =() => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext)
  
  const [text, setText] = useState('');

  const onChange= (event) =>  setText(event.target.value )
  
  const onSubmit= (event) => {
    event.preventDefault();

    if (text === ''){
      alertContext.setAlert('Please enter a user to search', 'light');
    }else{
      githubContext.searchUsers(text)
      setText('');
    }
  }

    return (
      <div>

        <form className='form' onSubmit={onSubmit}> {/*onSubmit gives us functionality when the form is submitted */}

          <input  type="text" 
                  value={text} 
                  onChange={onChange} 
                  name='text' 
                  placeholder='Search Users...'/>

          <input  type="submit" 
                  value='Search' 
                  className="btn btn-dark btn-block"/>
        </form>

        {githubContext.users.length > 0 && (
          <button 
            className="btn btn-light btn-block" 
            onClick={githubContext.clearUsers}> Clear Users
          </button>
        )}

      </div>
    
    )
}

export default Search
