import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <div className="container" style={{ padding: '2rem' }}>Loading…</div>;
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image_url || '/images/placeholder.png'} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>£{parseFloat(product.price).toFixed(2)}</h3>
          <button
            className="btn btn-success"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
