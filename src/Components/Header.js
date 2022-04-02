import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Image from 'react-bootstrap/Image';


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" style={{backgroundImage:"url(../images/header-background.jpg)",backgroundSize:"cover"}}>


        <nav id="nav-wrap" >
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" >DREAM-THEATRE4</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Radhe Dhoundiyal is an avid reader and  has aspiration for authoring books. He devotes his time rigoursly in training for long distance running. He wants to represent India in international events. Radhe has also developed a good understanding about electric circuits and makes his own miniature models of drones and electric trains.

			</h3>
            </Fade>
            <hr />

          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
