import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="../images/profile.jpg"
                alt="Radhe Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <ul><li>12 year old long distance runner clocking 19 mins for 5 kms and 39 mins for 10 kms</li><li> Have a great zeal for building electric circuites</li> <li>Passionate Sanskrit follower and an avid reader</li><li> Tried my hands in acting recently. </li></ul>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Radhe Dhoundiyal</span>
                    <br />
                    <span>
                      Delhi
                      
                    </span>
                   
                    <br />
                    <span>RadheDhoundiyal07@gmail.com</span>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
