import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { state: cartItems } = useCart();
  
  // useMemo se asegurará de que 'totalItems' solo se recalcule cuando 'cartItems' cambie.
  const totalItems = useMemo(() => 
    cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  return (
    <nav>
        <p><Link className='Link' to="/">🍕 Pizzería Mamma Mia!</Link></p>
        <p><Link className='Link' to="/carrito">Carrito ({totalItems})</Link></p>
    </nav>
  );
};

export default Navbar;
