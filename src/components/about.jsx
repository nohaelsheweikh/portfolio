import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I began my career as a self-taught programmer, driven by
                        curiosity and a passion for creating technology that
                        solves real problems. This early foundation led me to
                        pursue a{" "}
                        <strong>
                          Postgraduate Diploma in Computer Science
                        </strong>
                        , graduating with an <strong>A</strong> grade. I started
                        professionally as a <strong>backend developer</strong>,
                        primarily working with <strong>PHP</strong> to build and
                        maintain reliable, scalable systems.
                      </p>

                      <p>
                        As technology evolved, so did my interests. I
                        transitioned into <strong>frontend</strong> and{" "}
                        <strong>mobile development</strong>, expanding my
                        expertise in <strong>React JS</strong>,{" "}
                        <strong>React Native</strong>, and{" "}
                        <strong>Flutter</strong>. This shift enabled me to lead
                        and deliver several mobile applications, focusing on
                        performance, user experience, and cross-platform
                        consistency.
                      </p>

                      <p>
                        My growing interest in intelligent, data-driven systems
                        motivated me to strengthen my backend development using{" "}
                        <strong>Python</strong> and <strong>Flask</strong>. This
                        path eventually led me to pursue and complete an{" "}
                        <strong>MSc in Artificial Intelligence</strong> at the{" "}
                        <strong>University of Surrey</strong>, graduating with{" "}
                        <strong>Distinction</strong>. During the programme, I
                        specialised in machine learning, deep learning, and
                        deploying AI models to cloud platforms such as{" "}
                        <strong>Google Cloud</strong>.
                      </p>

                      <p>
                        Alongside my studies, I worked as a{" "}
                        <strong>Full Stack Developer</strong>, applying AI in
                        real-world systems by integrating Python-based backend
                        services, building intelligent features, and continuing
                        to develop modern, high-quality frontends. Today, I
                        combine <strong>over a decade</strong> of software
                        engineering experience with advanced expertise in AI to
                        create smart, scalable, end-to-end solutions—bridging
                        academic research with impactful engineering practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development Frontend </h3>
                    <p>
                      I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Mobile Development</h3>
                    <p>
                      I have experience building mobile apps android and ios and
                      using React Native,Flutter
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Frontend Developer with Backend experience</h3>
                    <p>
                      I have experience building & Designing RESTful APIs using
                      PHP,NODE JS
                    </p>
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
