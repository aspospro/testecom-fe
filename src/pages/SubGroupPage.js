import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SubgroupPage = function() {
  const { categoryId, groupId, subgroupId } = useParams();
  const [subgroup, setSubgroup] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(function() {
    // load subgroup details
    fetch('/api/subgroups/' + subgroupId)
      .then(function(res){ return res.json(); })
      .then(function(data){ setSubgroup(data); });

    // load products in this subgroup
    fetch(
      '/api/products?category=' +
        categoryId +
        '&group=' +
        groupId +
        '&subgroup=' +
        subgroupId
    )
      .then(function(res){ return res.json(); })
      .then(function(data){ setProducts(data); });
  }, [categoryId, groupId, subgroupId]);

  if (!subgroup) {
    return React.createElement('div', null, 'Loading sub-group…');
  }

  return React.createElement(
    'div',
    { className: 'subgroup-page' },
    React.createElement(
      'h1',
      null,
      'Sub-group: ' + subgroup.name
    ),
    React.createElement(
      'ul',
      { className: 'product-list' },
      products.map(function(p) {
        return React.createElement(
          'li',
          { key: p.id },
          React.createElement(
            Link,
            { to: '/' }, // or to product detail if you have one
            p.name + ' — £' + p.price
          )
        );
      })
    )
  );
};

export default SubgroupPage;
