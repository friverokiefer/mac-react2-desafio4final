import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/pizzaDetailView.css';

const PizzaDetailView = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { dispatch } = useCart();

  const fetchPizzaDetails = async () => {
    try {
      const response = await fetch(`/pizzas.json?id=${id}`);
      const data = await response.json();
      const selectedPizza = data.find(p => p.id === id);
      setPizza(selectedPizza);
    } catch (error) {
      console.error('Error fetching pizza details:', error);
    }
  };

  useEffect(() => {
    fetchPizzaDetails();
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...pizza, quantity: 1 }
    });
  };

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-detail-card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button onClick={addToCart}>Añadir al carrito</button>
    </div>
  );
};

export default PizzaDetailView;
