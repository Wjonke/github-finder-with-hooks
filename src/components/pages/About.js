import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1> About this App </h1>
      <p> App to search Github Users </p>
      <p> Version: 1.0.0 </p>
      <Link to='/' className="btn btn-dark btn-sm my-1"> Back to Search </Link>
    </>
  )
}

export default About
