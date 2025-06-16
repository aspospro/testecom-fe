import React from "react";

export default function TabSec() {
    return (
        <>
        <div className="container">
    {/* Nav tabs */}
    <ul className="nav margin-bottom-40" role="tablist">
      <li role="presentation" className="active">
        <a href="#tv-au" aria-controls="tv-au" role="tab" data-toggle="tab">
          <i className="flaticon-tools" /> Tools & Accessories <span>236 item(s)</span>
        </a>
      </li>
      <li role="presentation">
        <a href="#smart" aria-controls="smart" role="tab" data-toggle="tab">
          <i className="flaticon-screw-alt" /> Nails, Staples & Bolts <span>150 item(s)</span>
        </a>
      </li>
      <li role="presentation">
        <a href="#deks-lap" aria-controls="deks-lap" role="tab" data-toggle="tab">
          <i className="flaticon-door-open" /> Doors & Ironmongery <span>268 item(s)</span>
        </a>
      </li>
      <li role="presentation">
        <a href="#game-com" aria-controls="game-com" role="tab" data-toggle="tab">
          <i className="flaticon-paint-roller" /> Paint Sealant & Adhesives <span>79 item(s)</span>
        </a>
      </li>
      <li role="presentation">
        <a href="#watches" aria-controls="watches" role="tab" data-toggle="tab">
          <i className="flaticon-building" /> Building Products <span>105 item(s)</span>
        </a>
      </li>
      <li role="presentation">
        <a href="#access" aria-controls="access" role="tab" data-toggle="tab">
          <i className="flaticon-window" /> Windows & Domes <span>816 item(s)</span>
        </a>
      </li>
    </ul>

    {/* Tab panes */}
    <div className="tab-content">
      {/* TV & Audios */}
      <div role="tabpanel" className="tab-pane active fade in" id="tv-au">
        <div className="item-slide-5 with-bullet no-nav">
          {/* Product */}
          <div className="product">
            <article>
              <img className="img-responsive" src="images/item-img-1-1.jpg" alt="" />
              <span className="tag">Laptop</span>
              <a href="#." className="tittle">Laptop Alienware 15 i7 Perfect For Playing Game</a>
              <p className="rev">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
                <span className="margin-left-10">5 Review(s)</span>
              </p>
              <div className="price">$350.00</div>
              <a href="#." className="cart-btn">
                <i className="icon-basket-loaded" />
              </a>
            </article>
          </div>
          {/* ...repeat for other TV & Audio products */}
        </div>
      </div>

      {/* Smartphones */}
      <div role="tabpanel" className="tab-pane fade" id="smart">
        <div className="item-col-5">
          {/* Product */}
          <div className="product">
            <article>
              <img className="img-responsive" src="images/item-img-1-11.jpg" alt="" />
              <span className="sale-tag">-25%</span>
              <span className="tag">Accessories</span>
              <a href="#." className="tittle">Teclado Inalambrico Bluetooth Con Air Mouse</a>
              <p className="rev">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
                <span className="margin-left-10">5 Review(s)</span>
              </p>
              <div className="price">$350.00</div>
              <a href="#." className="cart-btn">
                <i className="icon-basket-loaded" />
              </a>
            </article>
          </div>
          {/* ...repeat for other Smartphones */}
        </div>
      </div>

      {/* Desk & Laptop */}
      <div role="tabpanel" className="tab-pane fade" id="deks-lap">
        <div className="item-col-5">
          {/* ...products */}
        </div>
      </div>

      {/* Game Console */}
      <div role="tabpanel" className="tab-pane fade" id="game-com">
        <div className="item-col-5">
          {/* ...products */}
        </div>
      </div>

      {/* Watches */}
      <div role="tabpanel" className="tab-pane fade" id="watches">
        <div className="item-col-5">
          {/* ...products */}
        </div>
      </div>

      {/* Accessories */}
      <div role="tabpanel" className="tab-pane fade" id="access">
        <div className="item-col-5">
          {/* ...products */}
        </div>
      </div>
    </div>
  </div>
        </>
    );
}