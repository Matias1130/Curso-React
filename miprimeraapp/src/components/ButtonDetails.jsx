import React from 'react'
import "./buttondetails.css"
function ButtonDetails(props) {

    const {children} = props;
    
  return (
    <div>
      <button className='button__details'>{children}</button>
    </div>
  )
}

export default ButtonDetails
