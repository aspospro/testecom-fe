import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]     = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // You could POST this to your backend later
    console.log({ name, email, message });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h1>Thanks for your message!</h1>
        <p>We’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
