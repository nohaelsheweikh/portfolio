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
                        I started my career as a self-taught programmer, driven
                        by curiosity and a passion for technology. This
                        foundation led me to pursue a{" "}
                        <strong>
                          Postgraduate Diploma in Computer Science
                        </strong>
                        , where I graduated with an <strong>A</strong> grade. I
                        began my professional journey as a{" "}
                        <strong>backend developer</strong>, primarily working
                        with <strong>PHP</strong> to build and maintain robust
                        systems.
                      </p>

                      <p>
                        As technology and user needs evolved, I transitioned
                        into <strong>frontend</strong> and{" "}
                        <strong>mobile development</strong>, expanding my skills
                        in <strong>React JS</strong>,{" "}
                        <strong>React Native</strong>, and{" "}
                        <strong>Flutter</strong>. This shift allowed me to lead
                        the development of several mobile applications,
                        enhancing user experience and performance across
                        platforms.
                      </p>

                      <p>
                        With a growing interest in intelligent systems and
                        data-driven solutions, I strengthened my backend
                        development skills using <strong>Python</strong> and{" "}
                        <strong>Flask</strong>. In{" "}
                        <strong>September 2024</strong>, I began an{" "}
                        <strong>MSc in Artificial Intelligence</strong> at{" "}
                        <strong>Surrey University</strong>, focusing on machine
                        learning, deep learning, and deploying AI models to the
                        cloud. Alongside my studies, I took on a new role as a{" "}
                        <strong>Full Stack Developer</strong>, where I actively
                        work with <strong>Python</strong> for backend
                        development, integrate AI models, and build frontend
                        features with modern frameworks. I'm set to graduate in{" "}
                        <strong>August 2025</strong>, continuing to bridge
                        academic research with real-world engineering practice.
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
