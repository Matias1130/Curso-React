import React from 'react'
import "./buttondetails.css"
import Button from './Button';
function ButtonDetails(props) {

    const {children} = props;
    
  return (
    <div>
      <Button className='button__details'>{children}</Button>
    </div>
  )
}

export default ButtonDetails
