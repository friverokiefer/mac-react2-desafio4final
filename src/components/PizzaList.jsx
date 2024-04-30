import React from 'react';
import Pizza from './Pizza';
import '../styles/pizzaList.css';

const PizzaList = ({ pizzas }) => {
  const renderPizzas = () => pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />);

  return <div className='PizzaList'>{renderPizzas()}</div>;
};

export default PizzaList;
