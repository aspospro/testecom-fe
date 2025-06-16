import React from 'react';

export default function HomeShip() {
  return (
    <>
    <div className="container">
        <ul>
          {/* <!-- Free Shipping --> */}
          <li>
            <div className="media-left"> <i className="flaticon-delivery-truck-1"></i> </div>
            <div className="media-body">
              <h5>Free Shipping</h5>
              <span>On order over £99</span></div>
          </li>
          {/* <!-- Money Return --> */}
          <li>
            <div className="media-left"> <i className="flaticon-arrows"></i> </div>
            <div className="media-body">
              <h5>Money Return</h5>
              <span>15 Days money return</span></div>
          </li>
          {/* <!-- Support 24/7 --> */}
          <li>
            <div className="media-left"> <i className="flaticon-operator"></i> </div>
            <div className="media-body">
              <h5>Support 24/7</h5>
              <span>Hotline: 0333 123 2639</span></div>
          </li>
          {/* <!-- Safe Payment --> */}
          <li>
            <div className="media-left"> <i className="flaticon-business"></i> </div>
            <div className="media-body">
              <h5>Safe Payment</h5>
              <span>Protect online payment</span></div>
          </li>
        </ul>
      </div>
    </>
  );
}