import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header           from './components/Header';
import Footer           from './components/Footer';
import HomePage         from './components/HomePage';
import ProductsList     from './pages/ProductsList';
import ConfirmationPage from './ConfirmationPage';
import ContactPage      from './components/ContactPage';
import CategoryPage     from './pages/CategoryPage';

export default function RouterContents() {
  const location = useLocation();

  useEffect(() => {
    if (!window.$) return;

    // 1) Hide any open Bootstrap collapses (e.g. your category dropdown)
    window.$('.collapse.show')
      .collapse('hide')
      .removeClass('show');

    // 2) Trigger window resize for “sticky” recalcs
    window.$(window).trigger('resize');

    // 3) Re-init any carousels or WOW.js
    window.$('.owl-carousel').owlCarousel();
    new window.WOW().init();

    // …and anything else from your old scripts…
  }, [location]);

  return (
    <>
      <Header />

      <main className="site-main">
        <Routes>
          <Route path="/"                                                           element={<HomePage />} />
          <Route path="/products/:id"                                               element={<ProductsList />} />
          <Route path="/confirmation/:orderId"                                      element={<ConfirmationPage />} />
          <Route path="/contact"                                                    element={<ContactPage />} />
          <Route path="/category/:categoryId"                                       element={<CategoryPage />} />
          <Route path="/category/:categoryId/group/:groupId"                        element={<CategoryPage />} />
          <Route path="/category/:categoryId/group/:groupId/subgroup/:subgroupId"   element={<CategoryPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
