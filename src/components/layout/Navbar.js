import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//no state so we use a functional component

 const Navbar = ({icon, title}) => {
//                ^^^^^^^^^^^
//when we pass in the props icon and title here, we dont need to use props.icon and props.title below, just icon and title

  return (
    <nav className='navbar bg-primary'>
      <h1><i className= { icon }/> { title }</h1>
        
      <> 
          <a href="https://github.com/Wjonke/github-finder"> Go to the code! ==>  https://github.com/Wjonke/github-finder </a> 
      </>
        <ul>
          <li>
            <Link to='/' > Home </Link>
            <Link to='/about' > About </Link>
          </li>
        </ul>
      
    </nav>
  )
  
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}
//the prop defaults above set what will render unless changed in app.js//


Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  icon:  PropTypes.string.isRequired,
}//this is the default proptypes that will be used for this component to make sure the correct info is passed in//

export default Navbar
