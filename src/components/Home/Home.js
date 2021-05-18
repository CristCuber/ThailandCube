import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import THCBanner from './THCBanner.png';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  boxText: {
    color: 'white',
    backgroundColor: "#3f51b5",
    padding: theme.spacing(3),
  },
  media: {
    height: 650,
  },
}));

const text ={
  welcome: 'ยินดีต้อนรับเข้าสู่ ThailandCube',
  description: 'ศูนย์กลางคนรักการเล่น Speed Cubing ของประเทศไทย',
}

function Home() {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardMedia
					component="img"
          image={THCBanner}
          title="ThailandCubeBannner"
        />
  		</Card>
  		<Card className={classes.boxText}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          {text.welcome}
        </Typography>
        <Typography component="h2" variant="h6" align="center" gutterBottom>
          {text.description}
        </Typography>
  		</Card>
  	</div>
  	)
}

export default Home