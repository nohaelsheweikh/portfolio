import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                        I started my career as a self-taught programmer, diving into computer science through my own curiosity and dedication. 
                        After gaining foundational knowledge, I pursued a <strong>Postgraduate Diploma in Computer Science</strong>, graduating with an impressive grade of <strong>A</strong>. 
                        This marked the beginning of my professional journey, where I initially worked as a <strong>backend developer</strong>, honing my skills in building robust systems and managing complex infrastructures.
                    </p>

                    <p>
                        As technology evolved, I embraced the challenge of switching to <strong>frontend</strong> and <strong>mobile development</strong>. 
                        This transition allowed me to contribute to the creation of numerous successful apps, shaping user experiences and pushing the boundaries of what mobile platforms could achieve.
                    </p>

                    <p>
                        In recognition of my commitment to learning and my accomplishments, I was accepted into the <strong>MSc program in Artificial Intelligence</strong> at <strong>Surrey University</strong>, 
                        one of the UK's most credible institutions. I began this new chapter in <strong>September 2024</strong>, furthering my expertise in cutting-edge technologies and AI, 
                        with plans to graduate in <strong>July 2025</strong>.
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
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
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
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
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
                    <p>I have experience building mobile apps android and ios and using React Native,Flutter</p>
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
                    <p>I have experience building & Designing RESTful APIs using PHP,NODE JS</p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
