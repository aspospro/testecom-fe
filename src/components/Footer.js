import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Footer Sections */}
      <footer>
        <div className="container">
          {/* Footer Upside Links */}
          <div className="foot-link">
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Search Terms</a></li>
              <li><a href="#">Advanced Search</a></li>
              <li><a href="#">Orders and Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="row">
            {/* Contact Column */}
            <div className="col-md-4">
              <h4>Contact Andytools!</h4>
              <p>Address: 612, 614 Chigwell Rd, Woodford, Woodford Green IG8 8AA</p>
              <p>Phone: 0333 123 2639</p>
              <p>Email: info@andytools.co.uk</p>
              <div className="social-links">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-google"></i></a>
              </div>
            </div>
            {/* Categories Column */}
            <div className="col-md-3">
              <h4>Categories</h4>
              <ul className="links-footer">
                <li><a href="#">Home Audio & Theater</a></li>
                <li><a href="#">TV & Video</a></li>
                <li><a href="#">Camera, Photo & Video</a></li>
                <li><a href="#">Cell Phones & Accessories</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Video Games</a></li>
                <li><a href="#">Bluetooth & Wireless</a></li>
              </ul>
            </div>
            {/* Customer Services Column */}
            <div className="col-md-3">
              <h4>Customer Services</h4>
              <ul className="links-footer">
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Secure Shopping</a></li>
                <li><a href="#">International Shipping</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            {/* Information Column */}
            <div className="col-md-2">
              <h4>Information</h4>
              <ul className="links-footer">
                <li><a href="#">Our Blog</a></li>
                <li><a href="#">About Our Shop</a></li>
                <li><a href="#">Secure Shopping</a></li>
                <li><a href="#">Delivery information</a></li>
                <li><a href="#">Store Locations</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Rights Section */}
      <div className="rights">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>Copyright © 2025 <a href="#" className="ri-li">Andytools</a>. All rights reserved.</p>
            </div>
            <div className="col-sm-6 text-right">
              <img src="/images/card-icon.png" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>

      {/* Go To Top */}
      <a href="#" className="cd-top"><i className="fa fa-angle-up"></i></a>
    </>
  );
}
