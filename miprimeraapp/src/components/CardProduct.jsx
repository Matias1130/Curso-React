import React from 'react'
import ButtonDetails from './ButtonDetails';
import "./cardproduct.css"
import { Link } from 'react-router-dom';
function Item(props) {
    const {price , title , img, id} = props ;
  return (
    <div className='div__cards'>
      <div className='card__body'>
        <img className='img' src={img}/>
        <h3 className='title__card'>{title}</h3>
        <div className='div__price'>
            <p className='price'>${price}</p>
        </div>
        <Link to={`/item/${id}`}>
          <ButtonDetails>Ver Detalles</ButtonDetails>
        </Link>
      </div>
    </div>
  )
}

export default Item
