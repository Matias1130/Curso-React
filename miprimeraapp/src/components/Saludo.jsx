import React from 'react'
import "./saludo.css"

function Saludo(props) {
    
    const {text} = props

    return (
        <div className='div_saludo'>
            <h1 className='saludo'>{text}</h1>
        </div>
    )
}

export default Saludo
