import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductTabs() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="container"><p>Loading products…</p></div>;
  }
  return (
    <>
            <div className="container">
      {/* Nav tabs */}
      <ul className="nav nav-tabs nav-pills margin-bottom-40" role="tablist">
        <li role="presentation" className="active">
          <a href="#featur" aria-controls="featur" role="tab" data-toggle="tab">Featured</a>
        </li>
        <li role="presentation">
          <a href="#special" aria-controls="special" role="tab" data-toggle="tab">Special</a>
        </li>
        <li role="presentation">
          <a href="#on-sal" aria-controls="on-sal" role="tab" data-toggle="tab">Onsale</a>
        </li>
      </ul>

      {/* Tab panes */}
      <div className="tab-content">
        {/* Featured */}
        <div role="tabpanel" className="tab-pane fade in active" id="featur">
          {/* Items Slider */}
          <div className="item-col-5">
            {/* Product */}
            {products.map((prod) => (
            <div key={prod.id} className="product">
              <article>
                {prod.image_url ? (  
                  <img className="img-responsive" src="{prod.image_url}" alt="" />
                  ) : (
                  <img className="img-responsive" src="images/item-img-1-1.jpg" alt="" />
                   )} 
                <span className="tag">{prod.code}</span>
                <a href="#" className="tittle">{prod.name}</a>
                <p className="rev">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <span className="margin-left-10">5 Review(s)</span>
                </p>
                <div className="price">£{prod.base_price}</div>
                <a href="#" className="cart-btn">
                  <i className="icon-basket-loaded"></i>
                </a>
              </article>
            </div>
            ))}
            {/* Repeat Product blocks as above, converting class to className and self-closing img tags */}
            {/* ... */}
          </div>
        </div>

        {/* Special */}
        <div role="tabpanel" className="tab-pane fade" id="special">
          {/* Items Slider */}
          <div className="item-col-5">
            {/* Product */}
            <div className="product">
              <article>
                <img className="img-responsive" src="images/item-img-1-11.jpg" alt="" />
                <span className="tag">Laptop</span>
                <a href="#." className="tittle">Laptop Alienware 15 i7 Perfect For Playing Game</a>
                <p className="rev">
                  <i className="fa fa-star"></i>
                  {/* ... */}
                </p>
                <div className="price">$350.00</div>
                <a href="#." className="cart-btn">
                  <i className="icon-basket-loaded"></i>
                </a>
              </article>
            </div>

            <div className="product">
              <article>
                <img className="img-responsive" src="images/item-img-1-11.jpg" alt="" />
                <span className="tag">Laptop</span>
                <a href="#." className="tittle">Laptop Alienware 15 i7 Perfect For Playing Game</a>
                <p className="rev">
                  <i className="fa fa-star"></i>
                  {/* ... */}
                </p>
                <div className="price">$350.00</div>
                <a href="#." className="cart-btn">
                  <i className="icon-basket-loaded"></i>
                </a>
              </article>
            </div>

            {/* ... */}
          </div>
        </div>

        {/* On sale */}
        <div role="tabpanel" className="tab-pane fade" id="on-sal">
          <div className="item-col-5">
            {/* Product */}
            <div className="product">
              <article>
                <img className="img-responsive" src="images/item-img-1-3.jpg" alt="" />
                <span className="tag">Laptop</span>
                <a href="#." className="tittle">Laptop Alienware 15 i7 Perfect For Playing Game</a>
                <p className="rev">
                  <i className="fa fa-star"></i>
                  {/* ... */}
                </p>
                <div className="price">$350.00</div>
                <a href="#." className="cart-btn">
                  <i className="icon-basket-loaded"></i>
                </a>
              </article>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}