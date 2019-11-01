import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/githubContext'
import PropTypes from 'prop-types'

export const Search =( { showClear, clearUsers, setAlert } ) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');
  
  const onChange= (event) =>  setText(event.target.value )
  
  const onSubmit= (event) => {
    event.preventDefault();

    if (text === ''){
      setAlert('Please enter Something', 'light');
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

        {showClear && (
          <button 
            className="btn btn-light btn-block" 
            onClick={clearUsers}> Clear Users
          </button>
        )}

          {/* this function makes it so we only show the button when the statement is true, IE there are users displayed. we are using a short circuit in this function && */}

      </div>
    
    )
}

Search.propTypes ={
  clearUsers:PropTypes.func.isRequired,
  showClear:PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}
export default Search
