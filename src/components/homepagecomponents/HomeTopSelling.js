import React from "react";

export default function TopSelling() {
    return (
        <>
        <div className="container">
    {/* Heading */}
    <div className="heading">
      <h2>Top Selling of the Week</h2>
      <hr />
    </div>

    {/* Items */}
    <div className="item-col-5">
      {/* Banner Product */}
      <div className="product col-2x">
        <div className="like-bnr">
          <div className="position-center-center">
            <h5>Smart Watch 2.0</h5>
            <p>
              Space Gray Aluminum Case with Black/Volt Real Sport Band{' '}
              <span>38mm | 42mm</span>
            </p>
            <a href="#." className="btn-round">View Detail</a>
          </div>
        </div>
      </div>

      {/* Standard Products */}
      <div className="product">
        <article>
          <img className="img-responsive" src="images/item-img-1-6.jpg" alt="" />
          <span className="sale-tag">-25%</span>

          <span className="tag">Tablets</span>
          <a href="#." className="tittle">Mp3 Sumergible Deportivo Slim Con 8GB</a>

          <p className="rev">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <span className="margin-left-10">5 Review(s)</span>
          </p>

          <div className="price">
            $350.00 <span>$200.00</span>
          </div>

          <a href="#." className="cart-btn">
            <i className="icon-basket-loaded" />
          </a>
        </article>
      </div>

      {/* ...repeat for other products */}
    </div>
  </div>
        </>
    );
}