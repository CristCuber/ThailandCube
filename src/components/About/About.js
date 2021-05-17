import React from "react";
import TitleImg from "./AboutTitle.jpg";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  Title: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${TitleImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,150,.3)',
  },
  TitleText: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
      paddingRight: 5,
    },
  },
   boxText: {
    padding: theme.spacing(3),
  },
  imageGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const image = [
    { image: Image1, title: 'Image1' },
    { image: Image2, title: 'Image2' },
    { image: Image3, title: 'Image3' },
];

function About() {
	const classes = useStyles();

	return (
		<about>
  			<Paper className={classes.Title}>
  				<div className={classes.overlay} />
  				<div className={classes.TitleText}>
  					<Typography component="h1" variant="h1" align="center">
              			เกี่ยวกับเรา
            		</Typography>
            	</div>
  			</Paper>
  			<Card className={classes.boxText}>
  				<Typography component="h1" variant="h4" align="center" gutterBottom>
            		ประวัติ
         		</Typography>
         		<Container maxWidth="md" className={classes.main}>
         			<Typography component="h1" variant="subtitle1" align="center" gutterBottom>
            			ThailandCube หรือชมรมลูกบาศก์ไทยก่อตั้งขึ้นเมื่อเดือนกรกฎาคม พ.ศ.2550 โดยคุณชัชวาลย์ จารุวัฒนกุล ชมรมของเราได้มีการจัดกิจกรรมต่าง ๆ ที่เกี่ยวกับ Speed Cubing มาตั้งแต่เริ่มก่อตั้ง เช่นการ meeting รวมตัวพูดคุย หรือการแข่งขันอย่างไม่เป็นทางการในประเทศไทย จนกระทั่งในปี พ.ศ. 2552 ชมรมของเราก็ได้จัดการแข่งขัน Speed Cubing อย่างเป็นทางการที่ได้รับการรับรองจากสมาคมลูกบาศก์โลก โดยมีคุณชัชวาลย์เป็นผู้แทนจากสมาคมลูกบาศก์โลกคนแรกของประเทศไทย
         			</Typography>
         		</Container>
         	</Card>
         	<Container className={classes.cardGrid} alignContent="center">
         		<Grid container spacing={1} >
         			{image.map((pic) => (
         				<Grid item md={4}>
         					<Card className={classes.card}>
         						<CardMedia
									component="img"
          							image={pic.image}
          							title={pic.title}
        						/>
         					</Card>
         				</Grid>
         			))}
         		</Grid>
         	</Container>
  		</about>
	);
}

export default About