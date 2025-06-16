// src/components/CategorySelect.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategorySelect() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(data => {
        setCats(data);
        setLoading(false);
      });
  }, []);

  function onChange(e) {
    const catId = e.target.value;
    if (catId) {
      navigate(`/category/${catId}`);
    }
  }

  return (
    <div className="search-cate">
      {loading
        ? <p>Loading…</p>
        : (
          <select className="selectpicker" onChange={onChange} defaultValue="">
            <option value="" disabled>All Categories</option>
            {cats.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        )}
      <input type="search" placeholder="Search entire store here..." />
      <button className="submit" type="submit">
        <i className="icon-magnifier" />
      </button>
    </div>
  );
}
