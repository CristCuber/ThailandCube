import React from "react";
import TitleImg from "./LearningTitle.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../Banner/Banner';
import UnderConst from '../UnderConst/UnderConst';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const bannertitle = {
  text: 'แหล่งข้อมูล',
  image: TitleImg,
}

const useStyles = makeStyles((theme) => ({
	mainGrid: {
    	marginTop: theme.spacing(1),
  	},
  	sidebarBox: {
    	padding: theme.spacing(2),
  	},
  	sidebarSection: {
    	marginTop: theme.spacing(3),
  	},
}));

function Learning() {
	const classes = useStyles();

	return (
		<learning>
        	<Banner title={bannertitle}/>
        	<Grid container spacing={5} className={classes.mainGrid}>
        		<Grid item xs={12} md={4}>
        			<Paper elevation={0} className={classes.sidebarBox}>
        				<Typography gutterBottom variant="h6" component="h2">
                  			หัวข้อ
                  		</Typography>
                  		<TreeView
      						className={classes.root}
      						defaultCollapseIcon={<ExpandMoreIcon />}
      						defaultExpandIcon={<ChevronRightIcon />}
    					>
    						<TreeItem nodeId = "1" label="3x3x3">
    							<TreeItem nodeId="2" label="มือใหม่" ></TreeItem>
        						<TreeItem nodeId="3" label="มือเก๋า" />
      						</TreeItem>
    						<TreeItem nodeId = "4" label="WCA">
    							<TreeItem nodeId="5" label="Calendar" />
        						<TreeItem nodeId="6" label="Chrome" />
        						<TreeItem nodeId="7" label="Webstorm" />
      						</TreeItem>
    					</TreeView>
        			</Paper>
        		</Grid>
        		<Grid item xs={12} md={8}>
        			<UnderConst/>
        		</Grid>
         	</Grid>
  		</learning>
	);
}

export default Learning