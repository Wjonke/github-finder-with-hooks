import React from 'react'

const NotFound = () => {
  let sadCat = require('../../img/sadCat.jpg');
  return (
    <>
    

    <div>
      <h1>404 : Not Found</h1>
      <p className='lead'> The Page you are looking for does not exist </p>
      <>
        <img src={sadCat} alt= 'sad cat'/>
      </>
    </div>

    </>
  )
}

export default NotFound
