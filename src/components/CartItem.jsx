import React from 'react';
import '../styles/cartItem.css'

class CartItem extends React.Component {
  render() {
    const { item, incrementQuantity, decrementQuantity, removeFromCart } = this.props;

    const handleIncrement = () => incrementQuantity(item.id);
    const handleDecrement = () => decrementQuantity(item.id);
    const handleRemove = () => removeFromCart(item.id);

    return (
      <div className='cart-item'>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    );
  }
}

export default CartItem;
