import React from 'react'
import "./buttoncarrito.css"
function Button(props) {

    const {children} = props;
    
  return (
    <div>
      <button className='button__carrito'>{children}</button>
    </div>
  )
}

export default Button
