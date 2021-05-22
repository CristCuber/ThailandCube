import React, { Component } from "react";
import PropTypes from 'prop-types';
import TitleImg from "./ActivityTitle.jpg";
import { withStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import Typography from '@material-ui/core/Typography';
import UnderConst from '../UnderConst/UnderConst';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import UpcomingWCAComp from './UpcomingWCAComp';
import PastWCAComp from './PastWCAComp';
import UpcomingEvent from './UpcomingEvent';
import PastEvent from './PastEvent';

const bannertitle = {
  text: 'กิจกรรม',
  image: TitleImg,
}

const styles = theme => ({
  root: {
    color: 'white',
    padding: '30px 30px',
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
  },
  cardContent: {
      flexGrow: 1,
  },
  firstCard: {
    paddingBottom: theme.spacing(4),
  },
  pastText: {
    paddingTop: theme.spacing(3),
  }
});

// const wcaLink = 'https://www.worldcubeassociation.org/api/v0/competitions?country_iso2=TH&start=';
// const today = new Date(2019, 0, 1);
// const todayString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// const numComps = 2;

class Activity extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      nextComps: [],
      isLoading: false,
      error: null,
    };

   }

  // componentDidMount() {
  //   this.setState({ isLoading: true });

  //     fetch(wcaLink  + todayString)
  //         .then(response => {
  //           if (response.ok) {
  //               return response.json();
  //           } 
  //           else {
  //               throw new Error('Something went wrong ...');
  //           }
  //         })
  //         .then(data => this.setState({ nextComps: data, isLoading: false }))
  //         .catch(error => this.setState({ error, isLoading: false }));
  //   }

    formatDate = (dateStr) => {
      var parts = dateStr.split("-")
      var date = new Date(parts[0], parts[1] - 1, parts[2])
      return  date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
  }

  render () {
    const { classes } = this.props;
    const { nextComps, isLoading, error } = this.state;

    let upComingWCA
    if(UpcomingWCAComp == null) {
      upComingWCA = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                <b>ไม่มีการแข่งขันที่กำลังจะเกิดขึ้นเร็ว ๆ นี้</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      );
    }
    else {
      upComingWCA = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                <b>{UpcomingWCAComp.name}</b>
              </Typography>
              <Typography gutterBottom >
                <b>วันที่</b>: {this.formatDate(UpcomingWCAComp.start_date)} ถึง {this.formatDate(UpcomingWCAComp.end_date)}
              </Typography>
              <Typography>
                <Button 
                  color="primary"
                  noWrap
                  key={UpcomingWCAComp.id}
                  href={UpcomingWCAComp.website}
                  target="_blank"
                >
                  ดูรายละเอียดเพิ่มเติม
                </Button >
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      )
    }

    let pastWCA
    if(PastWCAComp == null) {
      pastWCA = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                <b>ไม่มีการแข่งขันที่จบไปแล้วเร็ว ๆ นี้</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      );
    }
    else {
      pastWCA = (
        PastWCAComp.map((comp) => (
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2">
                  <b>{comp.name}</b>
                </Typography>
                <Typography gutterBottom >
                  <b>วันที่</b>: {this.formatDate(comp.start_date)} ถึง {this.formatDate(comp.end_date)}
                </Typography>
                <Typography>
                  <Button 
                    color="primary"
                    noWrap
                    key={comp.id}
                    href={comp.website}
                    target="_blank"
                  >
                    ดูรายละเอียดเพิ่มเติม
                  </Button >
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )
    }

    let upCommingE
    if(UpcomingEvent == null) {
      upCommingE = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                <b>ไม่มีการกิจกรรมที่กำลังจะเกิดขึ้นเร็ว ๆ นี้</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      );
    }
    else {
      upCommingE = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                <b>{UpcomingEvent.name}</b>
              </Typography>
              <Typography gutterBottom >
                <b>วันที่</b>: {this.formatDate(UpcomingEvent.start_date)} ถึง {this.formatDate(UpcomingEvent.end_date)}
              </Typography>
              <Typography>
                <Button 
                  color="primary"
                  noWrap
                  key={UpcomingEvent.id}
                  href={UpcomingEvent.website}
                  target="_blank"
                >
                  ดูรายละเอียดเพิ่มเติม
                </Button >
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      )
    }

    let pastE
    if(PastEvent == null) {
      pastE = (
        <Grid item xs={12} className={classes.firstCard}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                <b>ไม่มีการกิจกรรมที่กำลังจะเกิดขึ้นเร็ว ๆ นี้</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>  
      );
    }
    else {
      pastE = (
        PastEvent.map((event) => (
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2">
                  <b>{event.name}</b>
                </Typography>
                <Typography gutterBottom >
                  <b>วันที่</b>: {this.formatDate(event.start_date)} ถึง {this.formatDate(event.end_date)}
                </Typography>
                <Typography>
                  <Button 
                    color="primary"
                    noWrap
                    key={event.id}
                    href={event.website}
                    target="_blank"
                  >
                    ดูรายละเอียดเพิ่มเติม
                  </Button >
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )
    }

    return (
      <activity>
        <Banner title={bannertitle}/>
        <Container className={classes.cardGrid}>
              <Grid container spacing={3}>
                <Grid item xs={6}  spacing={3}>
                  <Typography gutterBottom variant="h4" component="h2" align="center">
                    <b>WCA Competition</b>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    การแข่งขันที่กำลังจะเกิดขึ้น
                  </Typography>
                  {upComingWCA}
                  <Divider />
                  <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.pastText}>
                    การแข่งขันที่ผ่านไปแล้ว
                  </Typography>
                  <Grid container spacing={4}>
                    {pastWCA}
                  </Grid>
                </Grid>
                <Grid item xs={6} spacing={3}>
                  <Typography gutterBottom variant="h4" component="h2" align="center">
                    <b>non-WCA Event</b>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    กิจกรรมที่กำลังจะเกิดขึ้น
                  </Typography>
                  {upCommingE}
                  <Divider />
                  <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.pastText}>
                    กิจกรรมที่ผ่านไปแล้ว
                  </Typography>
                  <Grid container spacing={4}>
                    {pastE}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
      </activity>
    );
  }
}

export default withStyles(styles)(Activity);

Activity.propTypes = {
  classes: PropTypes.object.isRequired,
};