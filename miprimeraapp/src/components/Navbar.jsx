import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <div className='div_navbar'>
            <img src='/logo.png'></img>
            <li className='li_navbar'>
                <ul className='ul_navbar'><a className='a_navbar' href=''>Inicio</a></ul>
                <ul className='ul_navbar'><a className='a_navbar' href=''>Productos</a></ul>
                <ul className='ul_navbar'><a className='a_navbar' href=''>Nosotros</a></ul>
                <ul className='ul_navbar'><a className='a_navbar' href=''>Contacto</a></ul>
            </li>
        </div>
    )
}


