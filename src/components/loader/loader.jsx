import React from 'react'

const Loader = () =>{
  return (
    <div className="loading">
      <p>Loading...</p>
      <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default Loader;