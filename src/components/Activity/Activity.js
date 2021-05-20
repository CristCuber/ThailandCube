import React, { Component } from "react";
import PropTypes from 'prop-types';
import TitleImg from "./ActivityTitle.jpg";
import { withStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import Typography from '@material-ui/core/Typography';
import UnderConst from '../UnderConst/UnderConst';

const bannertitle = {
  text: 'กิจกรรม',
  image: TitleImg,
}

const styles = theme => ({
  root: {
    color: 'white',
    padding: '30px 30px',
  },
});

const wcaLink = 'https://www.worldcubeassociation.org/api/v0/competitions?country_iso2=TH&start=2019-01-01'

class Activity extends Component {
	render () {
		const { classes } = this.props;

		return (
			<activity>
        		<Banner title={bannertitle}/>
        		<UnderConst/>
  			</activity>
		);
	}
}

export default withStyles(styles)(Activity);

Activity.propTypes = {
  classes: PropTypes.object.isRequired,
};