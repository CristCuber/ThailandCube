import React from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useToggleTheme } from './ThemeProvider/ThemeProvider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import WbIncandescent from '@material-ui/icons/WbIncandescent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import THCLogo from './THCLogo.png'

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  root: {
    maxWidth: 50,
  },
}));

const sections = [
    { title: 'Home', url: '/', out: 'no' ,},
  	{ title: 'เกี่ยวกับเรา', url: '/about', out: 'no',},
  	{ title: 'กิจกรรม', url: '/activity', out: 'no',},
  	{ title: 'แหล่งข้อมูล', url: '/learning', out: 'no',},
];

export default function Header() {
	const classes = useStyles();
	const toggleTheme = useToggleTheme();

  	return (
  		<React.Fragment>
  			<Toolbar >
            <Grid xs={1}>
              <CardMedia
                className={classes.root}
                component="img"
                image={THCLogo}
                title="ThailandCubeLogo"
              />
            </Grid>
        		<Typography
          			component="h1"
          			variant="h2"
          			color="inherit"
          			align="center"
          			noWrap
          			className={classes.toolbarTitle}
        		>
          			ThailandCube
        		</Typography>
        		<Tooltip title="ChangeTheme">
        			<IconButton>
      					<WbIncandescent
      						onClick={toggleTheme}
      					/>
      				</IconButton>
      			</Tooltip>
      	</Toolbar>
        <Divider />
      	<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      			{sections.map((section) => (
          		<Button 
            		color="inherit"
            		noWrap
            		key={section.title}
            		variant="body2"
            		href={section.url}
            		className={classes.toolbarLink}
          		>
            		{section.title}
          		</Button >
            ))}
            <Button 
           		color="inherit"
           		noWrap
           		key="forum"
           		variant="body2"
           		href="http://www.thailandcube.com/forum/index.php"
            	target="_blank"
            	className={classes.toolbarLink}
          	>
            	Forum
          	</Button >
      	</Toolbar>
        <Divider />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  onToggleDark: PropTypes.string
};