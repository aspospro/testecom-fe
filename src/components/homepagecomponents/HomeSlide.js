import React from 'react';

export default function HomeSlider() {
  return (
    <section className="slid-sec">
      <div className="container">
        <div className="container-fluid">
          <div className="row">

            {/* Main Slider */}
            <div className="col-md-9 no-padding">
              <div className="tp-banner-container">
                <div className="tp-banner">
                  <ul>

                    {/* SLIDE 1 */}
                    <li
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="300"
                      data-saveperformance="off"
                    >
                      {/* MAIN IMAGE */}
                      <img
                        src="images/slider-img-1.jpg"
                        alt="slider"
                        data-bgposition="center bottom"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                      />

                      {/* LAYER 1 */}
                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-110"
                        data-speed="800"
                        data-start="800"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '30px',
                          fontWeight: 500,
                          color: '#888888',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        High Quality VR Glasses
                      </div>

                      {/* LAYER 2 */}
                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-60"
                        data-speed="800"
                        data-start="1000"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 6,
                          fontSize: '50px',
                          color: '#da3731',
                          fontWeight: 800,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        3D Daydream View
                      </div>

                      {/* LAYER 3 */}
                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="10"
                        data-speed="800"
                        data-start="1200"
                        data-easing="Power3.easeInOut"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 7,
                          fontSize: '24px',
                          color: '#888888',
                          fontWeight: 500,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Starting at
                      </div>

                      {/* LAYER 4 */}
                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="210"
                        data-y="center"
                        data-voffset="5"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '36px',
                          fontWeight: 800,
                          color: '#000',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        $49.99
                      </div>

                      {/* LAYER 5 */}
                      <div
                        className="tp-caption lfb tp-resizeme scroll"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="80"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        data-scrolloffset="0"
                        style={{ zIndex: 8 }}
                      >
                        <a href="#." className="btn-round big">
                          Shop Now
                        </a>
                      </div>
                    </li>

                    {/* SLIDE 2 */}
                    <li
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="300"
                      data-saveperformance="off"
                    >
                      <img
                        src="images/slider-img-2.jpg"
                        alt="slider"
                        data-bgposition="center bottom"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                      />

                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-110"
                        data-speed="800"
                        data-start="800"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '30px',
                          fontWeight: 500,
                          color: '#888888',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        No restocking fee ($35 savings)
                      </div>

                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-60"
                        data-speed="800"
                        data-start="1000"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 6,
                          fontSize: '50px',
                          color: '#da3731',
                          fontWeight: 800,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        M75 Sport Watch
                      </div>

                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="10"
                        data-speed="800"
                        data-start="1200"
                        data-easing="Power3.easeInOut"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 7,
                          fontSize: '24px',
                          color: '#888888',
                          fontWeight: 500,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Now Only
                      </div>

                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="210"
                        data-y="center"
                        data-voffset="5"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '36px',
                          fontWeight: 800,
                          color: '#000',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        $320.99
                      </div>

                      <div
                        className="tp-caption lfb tp-resizeme scroll"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="80"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        data-scrolloffset="0"
                        style={{ zIndex: 8 }}
                      >
                        <a href="#." className="btn-round big">
                          Shop Now
                        </a>
                      </div>
                    </li>

                    {/* SLIDE 3 */}
                    <li
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="300"
                      data-saveperformance="off"
                    >
                      <img
                        src="images/slider-img-3.jpg"
                        alt="slider"
                        data-bgposition="center bottom"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                      />

                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-110"
                        data-speed="800"
                        data-start="800"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '30px',
                          fontWeight: 500,
                          color: '#888888',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Get Free Bluetooth when buy
                      </div>

                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="-60"
                        data-speed="800"
                        data-start="1000"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 6,
                          fontSize: '50px',
                          color: '#da3731',
                          fontWeight: 800,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Flat SmartWatch
                      </div>

                      <div
                        className="tp-caption sfl tp-resizeme"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="0"
                        data-speed="800"
                        data-start="1200"
                        data-easing="Power3.easeInOut"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        style={{
                          zIndex: 7,
                          fontSize: '24px',
                          color: '#888888',
                          fontWeight: 500,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Combo Only:
                      </div>

                      <div
                        className="tp-caption sfr tp-resizeme"
                        data-x="left"
                        data-hoffset="240"
                        data-y="center"
                        data-voffset="-5"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-splitin="chars"
                        data-splitout="none"
                        data-elementdelay="0.03"
                        data-endelementdelay="0.4"
                        data-endspeed="300"
                        style={{
                          zIndex: 5,
                          fontSize: '36px',
                          fontWeight: 800,
                          color: '#000',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        $590.00
                      </div>

                      <div
                        className="tp-caption lfb tp-resizeme scroll"
                        data-x="left"
                        data-hoffset="60"
                        data-y="center"
                        data-voffset="80"
                        data-speed="800"
                        data-start="1300"
                        data-easing="Power3.easeInOut"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="300"
                        data-scrolloffset="0"
                        style={{ zIndex: 8 }}
                      >
                        <a href="#." className="btn-round big">
                          Shop Now
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Main Slider */}
          

          {/* Sidebar Banners */}
          <div className="col-md-3 no-padding">
            <div className="product">
              <div className="like-bnr">
                <div className="position-center-center">
                  <h5>New line required</h5>
                  <h4>Smartphone s7</h4>
                  <span className="price">$259.99</span>
                </div>
              </div>
            </div>

            <div className="week-sale-bnr">
              <h4>
                Weekly <span>Sale!</span>
              </h4>
              <p>
                Saving up to 50% off all online <br />
                store items this week.
              </p>
              <a href="#." className="btn-round">
                Shop now
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
