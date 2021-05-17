import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import THCLogo from './THCLogo.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  boxText: {
    color: 'white',
    backgroundColor: "blue",
  },
}));

function Home() {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardMedia
					component="img"
          			image={THCLogo}
          			title="ThailandCubeLogo"
        		/>
  			</Card>
  			<Card className={classes.boxText}>
  				<h1 align='center'>ยินดีต้อนรับเข้าสู่ ThailandCube</h1>
  				<h3 align='center'>ศูนย์กลางคนรักการเล่น Speed Cubing ของประเทศไทย</h3>
  			</Card>
  		</div>
  	)
}

export default Home