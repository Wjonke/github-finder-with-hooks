import React from 'react'

const NotFound = () => {
  let sadCat = require('../../img/sadCat.jpg');
  return (

    <div>
      <h1>404 : Not Found</h1>
      
      <>
        <img src={sadCat} alt= 'sad cat'/>
      </>
    </div>

  )
}

export default NotFound
