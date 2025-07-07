// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link }   from 'react-router-dom';

export default function CategoryPage() {
  const { categoryId, groupId, subgroupId } = useParams();
  const [categories, setCategories] = useState([]);
  const [products,   setProducts]   = useState([]);
  const [page,       setPage]       = useState(1);
  const [lastPage,   setLastPage]   = useState(1);

  // 1) load sidebar
  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  // 2) load products whenever category/group/subgroup or page changes
  useEffect(() => {
    let url = `/api/categories/${categoryId}/products?page=${page}`;
    if (groupId)    url = `/api/categories/${categoryId}/groups/${groupId}/products?page=${page}`;
    if (subgroupId) url = `/api/categories/${categoryId}/groups/${groupId}/subgroups/${subgroupId}/products?page=${page}`;

    fetch(url)
      .then(r => r.json())
      .then(json => {
        // if page === 1, replace; otherwise append
        setProducts(prev => page === 1 ? json.data : [...prev, ...json.data]);
        setLastPage(json.last_page);
      })
      .catch(console.error);
  }, [categoryId, groupId, subgroupId, page]);

  // derive title from the selected category/group/subgroup
  const cat   = categories.find(c => c.id === +categoryId);
  const grp   = groupId   && cat?.groups.find(g => g.id === +groupId);
  const sub   = subgroupId && grp?.subgroups.find(s => s.id === +subgroupId);
  const title = sub?.name || grp?.name || cat?.name || 'Products';

  return (
    <div id="content">
      {/* Bread-crumb */}
      <div className="linking">
        <div className="container">
          <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            {cat && <li><Link to={`/category/${cat.id}`}>{cat.name}</Link></li>}
            {grp && <li><Link to={`/category/${cat.id}/group/${grp.id}`}>{grp.name}</Link></li>}
            {sub ? <li className="active">{sub.name}</li>
                 : !grp && cat ? <li className="active">{cat.name}</li> : null}
          </ol>
        </div>
      </div>

      {/* Main */}
      <section className="padding-top-40 padding-bottom-60">
        <div className="container">
          <div className="row">

            {/* Sidebar */}
            <aside className="col-md-3 shop-side-bar">
              <h6>Categories</h6>
              <ul>
                {categories.map(c => (
                  <li key={c.id}>
                    <Link
                      to={`/category/${c.id}`}
                      onClick={() => {
                        setPage(1);
                        window.$('#cater').collapse('hide');
                      }}
                    >
                      {c.name}
                    </Link>
                    {c.groups.length > 0 && (
                      <ul>
                        {c.groups.map(g => (
                          <li key={g.id}>
                            <Link
                              to={`/category/${c.id}/group/${g.id}`}
                              onClick={() => { setPage(1); window.$('#cater').collapse('hide'); }}
                            >
                              {g.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Products */}
            <div className="col-md-9">
              <div className="short-lst"><h2>{title}</h2></div>
              
              <div className="item-col-4" style={{ display: 'flex', flexWrap: 'wrap' }} >
                {products.length > 0 ? (
                  products.map(p => {
                    const imgSrc = p.image_url || '/images/item-img-1-1.jpg';
                    const price  = p.price?.base_price != null
                      ? `£${ parseFloat(p.price.base_price).toFixed(2) }`
                      : 'N/A';

                    return (
                      <div key={p.id} className="product" style={{ flex: '0 0 calc(25% - 12px)' }} >
                        <article>
                          <img className="img-responsive" src={imgSrc} alt={p.name} />
                          <Link to={`/products/${p.id}`} className="tittle">
                            {p.description}
                          </Link>
                          <div className="price">{price}</div>
                          <Link to="#" className="cart-btn">
                            <i className="icon-basket-loaded"></i>
                          </Link>
                        </article>
                      </div>
                    );
                  })
                ) : (
                  <p>No products found.</p>
                )}
              </div>

              {/* Load More Button */}
              {page < lastPage && (
                <div className="text-center" style={{ marginTop: 20 }}>
                  <button
                    className="btn-round big"
                    onClick={() => setPage(prev => prev + 1)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
