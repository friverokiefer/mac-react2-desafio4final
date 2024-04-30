import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = [];

const addToCart = (state, action) => {
  const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
  if (existingItemIndex > -1) {
    let newState = [...state];
    newState[existingItemIndex].quantity += 1;
    return newState;
  }
  return [...state, { ...action.payload, quantity: 1 }];
};

const removeFromCart = (state, action) => {
  return state.filter(item => item.id !== action.payload.id);
};

const incrementQuantity = (state, action) => {
  return state.map(item =>
    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const decrementQuantity = (state, action) => {
  return state.map(item =>
    item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action);
    case 'INCREMENT_QUANTITY':
      return incrementQuantity(state, action);
    case 'DECREMENT_QUANTITY':
      return decrementQuantity(state, action);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
