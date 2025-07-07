import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [errorCats, setErrorCats] = useState(null);

  useEffect(() => {
    // Replace this URL with whatever your Laravel API route is:
    fetch('/api/categories')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load categories');
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoadingCats(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorCats(err.message);
        setLoadingCats(false);
      });
  }, []);
  return (
    <>   
    <div className="top-bar">
    <div className="container">
      <p>Tools You Trust. Projects You Love.!</p>
      <div className="right-sec">
        <ul>
          <li><a href="#">Login/Register </a></li>
          <li><a href="#">Store Location </a></li>
          <li><a href="#">FAQ </a></li>
          <li><a href="#">Newsletter </a></li>
        </ul>
        <div className="social-top"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-linkedin"></i></a> <a href="#"><i className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-pinterest"></i></a> </div>
      </div>
    </div>
  </div>

    {/* Header */}
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/andytools512.png" alt="Andytools" height="70px"/>
          </Link>
        </div>
        <div className="search-cate">
          <select className="selectpicker" data-live-search="true">
            <option key="all-cats">All Categories</option>
            {loadingCats && (
                <option key="loading" disabled>
                  Loading…
                </option>
              )}

              {errorCats && (
                <option key="error" disabled>
                  Error loading categories
                </option>
              )}
            {!loadingCats && !errorCats && categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
          </select>
          <input type="search" placeholder="Search entire store here..." />
          <button className="submit" type="submit">
            <i className="icon-magnifier"></i>
          </button>
        </div>

        {/* Cart Part */}
        <ul className="nav navbar-right cart-pop">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="itm-cont">3</span>
              <i className="flaticon-shopping-bag"></i>
              <strong>My Cart</strong>
              <br />
              <span>3 item(s) - £500.00</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="media-left">
                  <a href="#" className="thumb">
                    <img src="/images/item-img-1-1.jpg" className="img-responsive" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <a href="#" className="tittle">Funda Para Ebook 7" 128GB full HD</a>
                  <span>250 x 1</span>
                </div>
              </li>
              <li>
                <div className="media-left">
                  <a href="#" className="thumb">
                    <img src="/images/item-img-1-2.jpg" className="img-responsive" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <a href="#" className="tittle">Funda Para Ebook 7" full HD</a>
                  <span>250 x 1</span>
                </div>
              </li>
              <li className="btn-cart">
                <a href="#" className="btn-round">View Cart</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Nav */}
      <nav className="navbar ownmenu">
        <div className="container">
          {/* Categories List */}
          <div className="cate-lst">
            <a data-toggle="collapse" className="cate-style" href="#cater">
              <i className="fa fa-list-ul"></i> Our Categories
            </a>
            <div className="cate-bar-in">
              <div id="cater" className="collapse">
                <ul>
                  {categories.map(cat => (
                    <li key={cat.id} className="sub-menu">
                      <Link
                        to={`/category/${cat.id}`}
                        onClick={() => window.$('#cater').collapse('hide')}
                      >
                        {cat.name}
                      </Link>

                      {cat.groups.length > 0 && (
                        <ul>
                          {cat.groups.map(grp => (
                            <li key={grp.id}>
                              <Link
                                to={`/category/${cat.id}/group/${grp.id}`}
                                onClick={() => window.$('#cater').collapse('hide')}
                              >
                                {grp.name}
                              </Link>

                              {grp.subgroups.length > 0 && (
                                <ul>
                                  {grp.subgroups.map(sub => (
                                    <li key={sub.id}>
                                      <Link
                                        to={`/category/${cat.id}/group/${grp.id}/subgroup/${sub.id}`}
                                        onClick={() => window.$('#cater').collapse('hide')}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navbar Header Toggle */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-open-btn" aria-expanded="false">
              <span><i className="fa fa-navicon"></i></span>
            </button>
          </div>

          {/* Main Nav Links */}
          <div className="collapse navbar-collapse" id="nav-open-btn">
            <ul className="nav">
              <li className="dropdown megamenu active">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">Home</Link>
                {/* Megamenu omitted for brevity */}
              </li>
              <li className="dropdown">
                <Link to="/pages" className="dropdown-toggle" data-toggle="dropdown">Shop</Link>
                {/* Pages dropdown omitted */}
              </li>
              <li className="dropdown megamenu">
                <Link to="/megamenu" className="dropdown-toggle" data-toggle="dropdown">Real Deals for You</Link>
                {/* Megamenu content omitted */}
              </li>
              <li className="dropdown">
                <Link to="/blog" className="dropdown-toggle" data-toggle="dropdown">Contact Us</Link>
                {/* Blog dropdown omitted */}
              </li>
            </ul>
          </div>

          {/* Hotline */}
          <div className="nav-right">
            <span className="call-mun">
              <i className="fa fa-phone"></i> <strong>Hotline:</strong> 0333 123 2639
            </span>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
