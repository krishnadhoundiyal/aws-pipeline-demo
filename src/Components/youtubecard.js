import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import YouTube from 'react-youtube';
const useStyles = makeStyles(theme => ({
  video: { "& iframe": {
  width: '100%',
  height:'200px',
   ['@media (min-width:780px)']: {
      width: '100%',
	  height:'100%'
    }
  }
},
yVideo:  {
  width: '100%',
  height:'200px',
  ['@media (min-width:780px)']: {
      width: '100%',
	  height:'400px'
    },
   ['@media (min-width:1030px)']: {
      width: '100%',
	  height:'400px'
    }
  },
  yVideoProject:  {
    width: '100%',
    height:'200px',
    ['@media (min-width:780px)']: {
        width: '100%',
  	  height:'200px'
      },
     ['@media (min-width:1030px)']: {
        width: '100%',
  	  height:'200px'
      }
    }







}));

export default function Youtubecard(props) {

    const classes = useStyles()

    const data = [
        { quarter: 1, earnings: 13000 }

    ]

    return (
        <div >
			<YouTube className={eval(`classes.${props.videoClass}`)} videoId={props.id}  />

		</div>
    )
}
