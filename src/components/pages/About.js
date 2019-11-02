import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1> About this App </h1>
      <p> This is an app to search for Github Users using the following build type:<li>Functional Components</li><li>React Hooks</li> <li>Context API for State Management</li> </p>
      <p> Version: 2.0.0 </p>
      <Link to='/' className="btn btn-dark btn-sm my-1"> Back to Search </Link>
    </>
  )
}

export default About
