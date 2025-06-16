import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeItem, clearCart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h1>Your Cart is Empty</h1>
        <Link to="/">← Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>
      <ul className="list-unstyled">
        {cart.map(item => (
          <li key={item.id} className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <strong>{item.name}</strong> × {item.qty}
            </div>
            <div>
              £{(item.price * item.qty).toFixed(2)}
              <button
                className="btn btn-danger btn-sm ml-3"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Total: £{total.toFixed(2)}</h2>

      <button className="btn btn-secondary mr-2" onClick={clearCart}>
        Clear Cart
      </button>
      <Link to="/checkout" className="btn btn-success">
        Proceed to Checkout
      </Link>
    </div>
  );
}
