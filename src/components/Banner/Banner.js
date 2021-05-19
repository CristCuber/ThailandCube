import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  Title: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    //height: '250px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,100,.7)',
  },
  TitleText: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
    },
  },
}));

function Banner(props) {
	const classes = useStyles();
	const { title } = props;

	return (
		<div>
			<Paper className={classes.Title} style={{ backgroundImage: `url(${title.image})` }}>
  				<div className={classes.overlay} />
  				<div className={classes.TitleText}>
  					<Typography component="h1" variant="h1" align="center">
              			{title.text}
            		</Typography>
          		</div>
  			</Paper>
  		</div>
  	)
}

export default Banner

Banner.propTypes = {
  title: PropTypes.object,
};