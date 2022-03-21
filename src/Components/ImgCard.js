import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
yVideo:  {
  width: '100%',
  height:'80%',
  ['@media (min-width:780px)']: {
      width: '100%',
	  height:'400px'
    },
   ['@media (min-width:1030px)']: {
      width: '640px',
	  height:'100%'
    }
  }







}));

export default function ImgCard(props) {

    const classes = useStyles()

    return (
        <div >
			<img className={classes.yVideo} src={props.id}  />
		</div>
    )
}
