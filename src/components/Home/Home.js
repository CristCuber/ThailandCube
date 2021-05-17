import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import THCBanner from './THCBanner.png';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  boxText: {
    color: 'white',
    backgroundColor: "blue",
    padding: theme.spacing(3),
  },
}));

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
          ยินดีต้อนรับเข้าสู่ ThailandCube
        </Typography>
        <Typography component="h1" variant="h6" align="center" gutterBottom>
          ศูนย์กลางคนรักการเล่น Speed Cubing ของประเทศไทย
        </Typography>
  		</Card>
  	</div>
  	)
}

export default Home