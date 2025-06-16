import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ConfirmationPage() {
  const { orderId } = useParams();
  return (
    <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Thank you!</h1>
      <p>Your order <strong>#{orderId}</strong> has been placed.</p>
      <Link to="/" className="btn btn-primary">Continue Shopping</Link>
    </div>
  );
}
