import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from './CartContext';
import axios from 'axios';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress]   = useState('');
  const [city, setCity]         = useState('');
  const [postcode, setPostcode] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const items = cart.map(p => ({ product_id: p.id, qty: p.qty }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!address || !city || !postcode) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('/api/orders', {
        items,
        shipping: { address, city, postcode }
      });
      clearCart();
      navigate(`/confirmation/${res.data.order_id}`);
    } catch {
      setError('Could not place order.');
      setLoading(false);
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h1>No items in your cart</h1>
        <Link to="/">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem', maxWidth: '600px' }}>
      <h1>Checkout</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            className="form-control"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input
            className="form-control"
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success" type="submit" disabled={loading}>
          {loading ? 'Placing…' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}
