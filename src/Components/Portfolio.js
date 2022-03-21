import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ProjectItems from './projects';
import Youtubecard from './youtubecard';
let id = 0;
class Portfolio extends Component {
  render() {
    const opts = {
      height: '200',
      width: '200',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  };
    //if (!this.props.data) return null;
    const projectsData = [
      {
        "title":"Rudrashtakam- Uttarkaand",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"yDo-fAPd1PQ"
      },
      {
        "title":"Shiv-Parvati Samvad",
        "category":"Acting Performance",

        "id":"eoRIc_VuvL0"
      },
      {
        "title":"Drone - Remote Controlled",
        "category":"Electric Circuits",

        "id":"Hbiae2pUg1I"
      },
      {
        "title":"Krishna Ki Chetavani",
        "category":"Mahabharat's Samvad",

        "id":"HXq5IGci_Ec"
      },
	  {
        "title":"Sanskrit-Presentations",
        "category":"Essay",

        "id":"4huetn0fs60"
      }

    ];
     const projects = projectsData.map(function (projects) {
       return (
         <div key={id++} className="columns portfolio-item">
           <div className="item-wrap">

             	<Youtubecard id={projects.id} opts={opts} videoClass={"yVideoProject"} />
             <div style={{ textAlign: "center" }}>{projects.title}</div>
           </div>
         </div>
       );
     });

     return (
       <section id="portfolio">
         <Fade left duration={1000} distance="40px">
           <div className="row">
             <div className="twelve columns collapsed">
               <h1>Check Out Some of My Works.</h1>

               <div
                 id="portfolio-wrapper"
                 className="bgrid-quarters s-bgrid-thirds cf"
               >
                 {projects}
               </div>
             </div>
           </div>
         </Fade>
       </section>
     );
  }
}

export default Portfolio;
