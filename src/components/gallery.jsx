import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="gallery">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">
                        Education & Background
                      </span>
                      <h2 className="colorlib-heading">Education</h2>
                      <p>
                      I am currently pursuing an MSc in Artificial Intelligence at Surrey University in the UK. My studies began in September 2024 and are scheduled to conclude in July 2025
                      </p>
                      <p>
                        2015 - 2018 Graduate Studies Comp.Science in computer
                        Arab Academy for Science, Technology and Maritime
                        Transport (AAST), Egypt
                      </p>
                    </div>
                    <h2 className="colorlib-heading">Certificates</h2>
                    <Carousel autoPlay={true}>
                      <div>
                        <img src="images/cer-1.png" />
                        <p className="legend">
                          software architecture Object-Oriented Design
                        </p>
                      </div>
                      <div>
                        <img src="images/cer-6.png" />
                        <p className="legend">
                          Server-side Development with NodeJS, Express and
                          MongoDB
                        </p>
                      </div>
                      <div>
                        <img src="images/cer-7.png" />
                        <p className="legend">React js Hacker Rank</p>
                      </div>
                      <div>
                        <img src="images/cer-2.png" />
                        <p className="legend">
                          Initiating and Planning Projects , PMP
                        </p>
                      </div>
                      <div>
                        <img src="images/cer-8.png" />
                        <p className="legend">
                          PMP , Budgeting and Scheduling Projects,
                        </p>
                      </div>
                      <div>
                        <img src="images/cer-3.png" />
                        <p className="legend">
                          Introduction to TensorFlow for Artificial
                          Intelligence, Machine Learning, and Deep Learning
                        </p>
                      </div>

                      <div>
                        <img src="images/cer-4.png" />
                        <p className="legend">
                          Machine Learning , Stanford University
                        </p>
                      </div>
                      <div>
                        <img src="images/cer-5.png" />
                        <p className="legend">
                          Machine Learning , Stanford University
                        </p>
                      </div>
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
