import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, IconButton } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  Link: {
    flexShrink: 0,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const social = [
  { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/Thcube' },
  { name: 'Youtube', icon: YouTubeIcon, url: 'https://www.youtube.com/c/ThailandCube' },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
    	<Container>
      		<Grid container spacing={3} >
        		<Grid item className={classes.grow} />
          			{social.map((network) => (
      		  			<Grid item>
	      		 			<Link
    	  	      				color="inherit" 
      				  			display="block" 
      				  			variant="body1" 
      				 			href={network.url} 
      				  			target="_blank" 
      				  			key={network}
	      		 			>
    	         				<Grid container 
                  					direction="row" 
          			 				spacing={1} 
          			 				alignItems="center"
	          	  				>
    	        	  				<Grid item>
        	      						<network.icon/>
            						</Grid>
            						<Grid item>{network.name}</Grid>
          			 			</Grid>
       			  			</Link>
      		  			</Grid>
          			))}
      			</Grid>
      	</Container>
    </div>
  );
}