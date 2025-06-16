import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const GroupPage = function() {
  const { categoryId, groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(function() {
    // load group details
    fetch('/api/groups/' + groupId)
      .then(function(res){ return res.json(); })
      .then(function(data){ setGroup(data); });

    // load products in this group
    fetch(
      '/api/products?category=' +
        categoryId +
        '&group=' +
        groupId
    )
      .then(function(res){ return res.json(); })
      .then(function(data){ setProducts(data); });
  }, [categoryId, groupId]);

  if (!group) {
    return React.createElement('div', null, 'Loading group…');
  }

  return React.createElement(
    'div',
    { className: 'group-page' },
    React.createElement(
      'h1',
      null,
      'Group: ' + group.name
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
            {
              to:
                '/category/' +
                categoryId +
                '/group/' +
                groupId +
                '/subgroup/' +
                (p.subgroupId || '')
            },
            p.name + ' — £' + p.price
          )
        );
      })
    )
  );
};

export default GroupPage;
