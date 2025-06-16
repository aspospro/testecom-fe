import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-lg-4 col-md-6">
            <div className="single-product-item">
              <Link to={`/products/${p.id}`}>
                <img src={p.image_url || '/images/placeholder.png'} alt={p.name} />
                <h3>{p.name}</h3>
                <span>£{parseFloat(p.price).toFixed(2)}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
