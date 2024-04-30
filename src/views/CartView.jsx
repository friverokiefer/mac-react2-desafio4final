import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/cartView.css'

const CartAction = (dispatch, type) => (id) => {
  dispatch({ type, payload: { id } });
};

const CartView = () => {
  const { state: cartItems, dispatch } = useCart();

  // Simplificamos las acciones utilizando una función de orden superior
  const incrementQuantity = CartAction(dispatch, 'INCREMENT_QUANTITY');
  const decrementQuantity = CartAction(dispatch, 'DECREMENT_QUANTITY');
  const removeFromCart = CartAction(dispatch, 'REMOVE_FROM_CART');

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart-view-container'>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartView;
