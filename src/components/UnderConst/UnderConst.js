import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: '30px 30px',
  },
});

class UnderConst extends Component {
  render () {
    const { classes } = this.props;

    return (
      <underconst>
        <Typography component="h1" variant="h4" align="center" paragraph className={classes.root}>
          🚧 Under Construction!
        </Typography>
        <Typography component="h1" variant="h4" align="center" paragraph className={classes.root}>
          Comming Soon!
        </Typography>
      </underconst>
    );
  }
}

export default withStyles(styles)(UnderConst);

UnderConst.propTypes = {
  classes: PropTypes.object.isRequired,
};