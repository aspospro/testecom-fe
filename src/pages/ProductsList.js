import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ProductsList() {
  const { id } = useParams();  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
console.log('products',product)
  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error(err);
        // you might want to handle 404 here
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product…</p>;
  if (!product) return <p>Product not found.</p>;

 return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img src={product.image_url || '/images/placeholder.png'} alt={product.name} />
      <p><strong>Price:</strong> £{parseFloat(product.base_price).toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description}</p>
      {/* render any other fields you need */}
    </div>
  );
}
