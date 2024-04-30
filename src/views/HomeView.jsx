import React, { useState, useEffect } from 'react';
import PizzaList from '../components/PizzaList';
import HeroBanner from '../components/HeroBanner';

const HomeView = () => {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const response = await fetch('/pizzas.json');
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div>
      <HeroBanner />
      <PizzaList pizzas={pizzas} />
    </div>
  );
};

export default HomeView;
