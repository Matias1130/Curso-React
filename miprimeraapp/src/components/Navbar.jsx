import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
    <nav className='div_navbar'>
      <img src='/logo.png' alt='Logo' className='logo' />
      <ul className='ul_navbar'>
        <li className='li_navbar'>
          <Link className='a_navbar' to=''>Inicio</Link>
        </li>
        <li className='li_navbar'>
          <Link className='a_navbar' to='/item'>Detalles</Link>
        </li>
        <li className='li_navbar'>
          <Link className='a_navbar' to='/category/ropa'>Ropa</Link>
        </li>
        <li className='li_navbar'>
          <Link className='a_navbar' to='/category/accesorios'>Accesorios</Link>
        </li>
        <li className='li_navbar'>
          <Link className='a_navbar' to='/category/hogar'>Hogar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
