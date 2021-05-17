import React from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useToggleTheme } from './ThemeProvider/ThemeProvider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import WbIncandescent from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
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
}));

const sections = [
	{ title: 'Home', url: '/' },
  	{ title: 'เกี่ยวกับเรา', url: '/about' },
  	{ title: 'กิจกรรม', url: '/activity' },
  	{ title: 'แหล่งรวมข้อมูล', url: '/learning' },
];

export default function Header() {
	const classes = useStyles();
	const toggleTheme = useToggleTheme();

  	return (
  		<React.Fragment>
  			<Toolbar className={classes.toolbar}>
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
      		<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      			 {sections.map((section) => (
          			<Link
            			color="inherit"
            			noWrap
            			key={section.title}
            			variant="body2"
            			href={section.url}
            			className={classes.toolbarLink}
          			>
            			{section.title}
          			</Link>
        		))}
        		<Link
            		color="inherit"
            		noWrap
            		key="forum"
            		variant="body2"
            		href="http://www.thailandcube.com/forum/index.php"
            		target="_blank"
            		className={classes.toolbarLink}
          		>
            		Forum
          		</Link>
      		</Toolbar>
      	</React.Fragment>
  	);
}

Header.propTypes = {
  sections: PropTypes.array,
  onToggleDark: PropTypes.string
};