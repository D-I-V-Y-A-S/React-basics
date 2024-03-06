import React from 'react'
//on passing dynamic values {} is used.
const GreetFunctionalComponent = ({username}) => {
  return (
<React.Fragment>
   <p>Hello from functional component</p>
   <p>Hello ,{username}</p>
  </React.Fragment>
  )
}

export default GreetFunctionalComponent