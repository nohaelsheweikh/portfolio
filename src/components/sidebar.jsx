import React, { Component } from 'react'
import { FaGithub, FaEnvelope, FaHeart, FaCoffee } from "react-icons/fa";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/me.JPG)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Noha Elsheweikh</a>
              </h1>
              <a href="mailto:nohaelsheweikh@gmail.com">
                <FaEnvelope /> nohaelsheweikh@gmail.com
              </a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" data-nav-section="gallery">
                      Education & Certificates
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li> */}
                {/* <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                {/* <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                {/* <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li> */}
                <li>
                <a href="https://github.com/nohaelsheweikh" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>

                </li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                 <p>Made with <FaHeart /> and <FaCoffee /></p>
                </small>
              </p>
              <p>
                <small>Something coming soon !!</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
