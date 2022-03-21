import React, { Component } from "react";
import Slide from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Youtubecard from './youtubecard';
const useStyles = makeStyles(theme => ({


  root: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-around',
     overflow: 'hidden',
     backgroundColor: theme.palette.background.paper,
   },
   gridList: {
     width: "80%",
     height: "600px",
   },
   icon: {
     color: 'rgba(255, 255, 255, 0.54)',
   },





}));

export default function ProjectItems(props) {

    const classes = useStyles()
    const opts = {
      height: '600',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  };
    const projects = [
      {
        "title":"Rudrashtakam",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"o5XD0d9Yrak"
      },
      {
        "title":"Rudrashtakam",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"o5XD0d9Yrak"
      },
      {
        "title":"Rudrashtakam",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"o5XD0d9Yrak"
      },
      {
        "title":"Rudrashtakam",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"o5XD0d9Yrak"
      },
      {
        "title":"Rudrashtakam",
        "category":"Ramayana's Uttarkaand - Shiv Aradhna for Kaakbhushandi",

        "id":"o5XD0d9Yrak"
      },
    ];
    return (
      <div className={classes.root}>
    <GridList cellHeight={360} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">December</ListSubheader>
      </GridListTile>
      {projects.map((project) => (
        <GridListTile >

          	<Youtubecard id={project.id} opts={opts} />
          <GridListTileBar
            title={project.title}
            subtitle={<span>by: {project.category}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${project.Rudrashtakam}`} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
    )
}
