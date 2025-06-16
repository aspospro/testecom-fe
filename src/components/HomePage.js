// src/components/HomePage.js
import React from 'react';
import HomeSlider from './homepagecomponents/HomeSlide';
import HomeShip from './homepagecomponents/HomeShipping';
import ProductTabs from './homepagecomponents/HomeProductTabs';
import TopSelling from './homepagecomponents/HomeTopSelling';
import TabSec from './homepagecomponents/HomeTabSec';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      {/* Slider Section */}
      <section className="slid-sec">
        <HomeSlider />
      </section>
    <div id="content">
      {/* Shipping Info */} 
      <section className="shipping-info">
        <HomeShip />
      </section>

      {/* Featured / Tabbed Products */}
      <section className="featur-tabs padding-top-60 padding-bottom-60">
        <ProductTabs />
      </section>

      {/* Top Selling of the Week */}
      <section className="light-gry-bg padding-top-60 padding-bottom-30">
        <TopSelling />
      </section>

      {/* <!-- Main Tabs Sec --> */}
      <section className="main-tabs-sec padding-top-60 padding-bottom-0">
        <TabSec />
      </section>

      {/* Clients Logos */}
      <section className="light-gry-bg clients-img">
        <div className="container">
        <ul>
          <li><img src="images/c-img-1.png" alt="" /></li>
          <li><img src="images/c-img-2.png" alt="" /></li>
          <li><img src="images/c-img-3.png" alt="" /></li>
          <li><img src="images/c-img-4.png" alt="" /></li>
          <li><img src="images/c-img-5.png" alt="" /></li>
        </ul>
      </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newslatter">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Subscribe our Newsletter <span>Get <strong>25% Off</strong> first purchase!</span></h3>
          </div>
          <div className="col-md-6">
            <form>
              <input type="email" placeholder="Your email address here..." />
              <button type="submit">Subscribe!</button>
            </form>
          </div>
        </div>
      </div>
      </section>
      </div>
    </>
  );
}
