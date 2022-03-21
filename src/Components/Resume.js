import React, { Component } from "react";
import Slide from "react-reveal";
import YouTube from 'react-youtube';
import Youtubecard from './youtubecard';
import ImgCard from './ImgCard'

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const opts = {
      height: '200',
      width: '320',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  };
	const sports = [{
		sports : "Junior Sports India - 2019",
		category : "400 meters",
		position: "Position - 1",
		description:"Annual Event conducted within Delhi schools to promote Sports",
		img : "../images/jsi2019.jpeg",

	},{
		sports : "SportyGo - 2019",
		category : "3000 meters",
		position: "Position - 1",
		description:"An annual event conducted in Jawahar Lal Statdium to nurture athletism",
		img : "../images/SportyGO.jpg",
	},{
		sports : "Airtel Marathon - 2020",
		category : "5000 meters",
		position: "Position : 1",
		description:"Airtel Marathon a prestigous annual run. As I am under 15 years only allowed to\
    participate in 5K race.",
		img : "../images/gold.jpg",
	}
	]
	const literature = [{
		type : "Books Authored",
		category : "Authored",
		name: "The Hunt for the Hotel Ghost - 2020",
		description:"Written during the lockdown this is my first foray into writing - Available on \
    Kindle, the ASIN is B08QQ6LHY1",
		img : "../images/book.jpg",

	},
	{
		type : "Sanskrit Presentation",
		category : "PAN India Competetion",
		name: "XIX Brem Dutt Pan India Inter School Competetion",
		description:"Created and Presented an Essay in Sanskrit based on On-line Eduction during Covid Times" ,
		img : "../images/sanskrit.jpg",

	},
	{
		type : "Comic-cator Presentation",
		category : "Ínter School Presentations",
		name: "Goenkan TechFusion 2022",
		description:"Inter Goenkan event to demonstrate mindfulness to conserve Electric Energy through comic" ,
		img : "../images/comic.jpeg",

	}
	]
    const education = sports.map(function (sport) {
      return (
        <div key={sport.sports}>
          <h3>{sport.sports}</h3>
          <p className="info">
            {sport.category} <span>&bull;</span>
            <em className="date">{sport.position}</em>
          </p>
          <p>{sport.description}</p>
		  {"video" in sport ? (
				<Youtubecard id={sport.video} videoClass="yVideo"   />
			  ) : (
				<ImgCard id={sport.img} />
			  )}

        </div>
      );
    });

    const work = literature.map(function (interest) {
      return (
        <div key={interest.type}>
          <h3>{interest.category}</h3>
          <p className="info">
            {interest.name}

          </p>
          <p>{interest.description}</p>
		  {"video" in interest ? (
				<Youtubecard id={interest.video} videoClass="yVideo"  />
			  ) : (
				<ImgCard id={interest.img} />
			  )}
        </div>
      );
    });

    const skills =  [
      {
        "name":"Running",
        "level":"80%"
      },
      {
        "name":"Literature",
        "level":"70%"
      },
      {
        "name":"Applied Science",
        "level":"80%"
      },
      {
        "name":"Gaming",
        "level":"70%"
      },
      {
        "name":"Instruments(Guitar)",
        "level":"10%"
      },
	  {
        "name":"Astronomy",
        "level":"50%"
      }
    ].map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Sports</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Literature</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Interests</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>Here's what I love doing</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
