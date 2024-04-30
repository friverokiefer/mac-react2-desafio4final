import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/pizza.css';

const IngredientsList = ({ ingredients }) => (
  <ul>
    {ingredients.map((ingredient, index) => (
      <li key={index}>🍕 {ingredient}</li>
    ))}
  </ul>
);

const Pizza = ({ pizza }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...pizza, quantity: 1 } });
  };

  return (
    <div className="pizza-card">
      <div className='pizza-image'>
        <img src={pizza.img} alt={pizza.name} />
      </div>
      <h3>{pizza.name}</h3>
      <div className='pizza-info'>
        <p>Ingredientes:</p>
        <IngredientsList ingredients={pizza.ingredients} />
      </div>
      <div className="price">${pizza.price}</div>
      <button className='seeMoreButton'>
        <Link className='Link' to={`/pizza/${pizza.id}`}>Ver Más 👀</Link>
      </button>
      <button className='addButton' onClick={handleAddToCart}>Añadir al Carro 🛒</button>
    </div>
  );
};

export default Pizza;
