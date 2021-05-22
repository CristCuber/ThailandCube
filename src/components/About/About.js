import React from "react";
import TitleImg from "./AboutTitle.jpg";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Banner from '../Banner/Banner';

const useStyles = makeStyles((theme) => ({
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
  cardMedia: {
    width: 400,
  },
  card2: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
}));

const bannertitle = {
  text: 'เกี่ยวกับเรา',
  image: TitleImg,
}

const speedCubing = {
  title: 'Speed Cubing คืออะไร',
  paragraph: [
    {detail: 'Speed Cubing คือการแข่งขันเพื่อแก้โจทย์ twisty puzzle โดยผู้ที่แก้โจทย์ได้เร็วที่สุดจะเป็นผู้ชนะ ตัวอย่าง puzzle ที่รู้จักกันทั่วไปคือ 3x3x3 (หรือที่เรียกกันว่า รูบิค)'},
    {detail: 'โดยการเล่น Speed Cubing นั้นไม่จำเป็นต้องเล่นเพื่อเข้าแข่งขันเพียงอย่างเดียว เพราะการเล่น Speed Cubing นั้นจะช่วยฝึกฝนทักษะหลาย ๆ อย่างให้กับผู้เล่น เช่น การสังเกต, ความจำระยะสั้นและระยะยาว, สมาธิ, ความอดทน, กล้ามเนื้อมัดเล็กและกล้ามเนื้อมัดใหญ่, การทำงานสอดประสานกันระหว่าตา มือ และสมอง'},
    {detail: 'นอกจากนนี้การเล่น Speed Cubing ยังไม่ได้จำกัดอยู่แค่กับวัยเด็กเท่านั้น ผู้คนทุกวัยก็สามารถเล่นได้ โดยในวัยผู้ใหญ่นั้น การเล่น Speed Cubing มีผลในช่วยในการป้องกันโรคเกี่ยวกับความจำอย่างเช่นโรคอัลไซเมอร์ได้อีกด้วย'},
  ]
}

const history = {
  title: 'ThailandCube',
  paragraph: [
    {detail: 'ThailandCube หรือชมรมลูกบาศก์ไทยก่อตั้งขึ้นเมื่อเดือนกรกฎาคม พ.ศ.2550 โดยคุณชัชวาลย์ จารุวัฒนกุล ชมรมของเราได้มีการจัดกิจกรรมต่าง ๆ ที่เกี่ยวกับ Speed Cubing มาตั้งแต่เริ่มก่อตั้ง เช่นการ meeting รวมตัวพูดคุย หรือการแข่งขันอย่างไม่เป็นทางการในประเทศไทย'},
    {detail: 'จนกระทั่งในปี พ.ศ. 2552 ชมรมของเราก็ได้จัดการแข่งขัน Speed Cubing อย่างเป็นทางการที่ได้รับการรับรองจากสมาคมลูกบาศก์โลก โดยมีคุณชัชวาลย์เป็นผู้แทนจากสมาคมลูกบาศก์โลกคนแรกของประเทศไทย'},
  ]
}

const imageTop = [
    { image: Image1, title: 'Image1' },
    { image: Image2, title: 'Image2' },
];

function About() {
	const classes = useStyles();

	return (
		<about>
      <Banner title={bannertitle}/>
      <Card className={classes.boxText}>
        <Typography component="h1" variant="h4" align="center" color="primary" gutterBottom>
          {speedCubing.title}
        </Typography>
        <Container maxWidth="lg">
          {speedCubing.paragraph.map((text) => (
            <Typography component="h1" variant="subtitle1" align="center" gutterBottom>
              {text.detail}
            </Typography>
          ))}
        </Container>
      </Card>
      <div className={classes.cardGrid} alignContent="center">
        <Grid container spacing={2} >
         	{imageTop.map((pic) => (
         		<Grid item md={6}>
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
     </div>
      <Grid item xs={12} md={12}>
        <Card className={classes.card2}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h1" variant="h4" align="center" color="primary" gutterBottom>
                {history.title}
              </Typography>
              <Container maxWidth="md">
                {history.paragraph.map((text) => (
                  <Typography component="h1" variant="subtitle1" align="center" gutterBottom>
                    {text.detail}
                  </Typography>
               ))}  
              </Container>
            </CardContent>
          </div>
          <Hidden smDown>
            <CardMedia 
              className={classes.cardMedia} 
              image={Image3}
              title="Image3" 
            />
          </Hidden>
        </Card>
      </Grid>
  	</about>
	);
}

export default About