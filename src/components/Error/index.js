import React from 'react'

function Error({ children }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{children}</p> 
    </div>
  )
}

export default Error