import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../context/cartContext';
import "./carrito.css";

export default function CartWidget() {
    const context = useContext(cartContext);

    return (
        <Link to="/cart" className="div_carrito">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61H19a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div>
                <span className="count">{context.countItemsInCart()}</span>
            </div>
        </Link>
    );
}

