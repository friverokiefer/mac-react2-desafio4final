import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import PizzaDetailView from './views/PizzaDetailView';
import CartView from './views/CartView';
import { CartProvider } from './context/CartContext';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/pizza/:id" element={<PizzaDetailView />} />
    <Route path="/carrito" element={<CartView />} />
  </Routes>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </CartProvider>
  );
};

export default App;
