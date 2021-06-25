import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css"
export default class Testmonials extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="testmonials">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Testmonials</span>
                      <h2 className="colorlib-heading">Testmonials</h2>
                    </div>

                    <Carousel autoPlay={true} showThumbs={false}>
                      <div>
                      <img src="images/ramy.JPG" style={{width:150,borderRadius:'50%',height:150,backgroundSize:"cover"}}/>
                        <div className="myCarousel">
                          <h3>Ramy Mousa</h3>
                          <h4>Software Engineer </h4>
                          <a href="https://www.linkedin.com/in/ramy-mousa">view linked in profile</a>
                          <p>
                            The simple and intuitive design makes it easy for me
                            use. I highly recommend Fetch to my peers.
                          </p>
                        </div>
                      </div>

                      {/* <div>
                      <img src="images/me.JPG" style={{width:150,borderRadius:'50%',height:150,backgroundSize:"cover"}}/>
                        <div className="myCarousel">
                          <h3>Daniel Keystone</h3>
                          <h4>Designer</h4>
                          <p>
                            The simple and intuitive design makes it easy for me
                            use. I highly recommend Fetch to my peers.
                          </p>
                        </div>
                      </div> */}
                     
                     
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
 