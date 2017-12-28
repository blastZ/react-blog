import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: '100%'
  }
};

class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography type="title" color="inherit" component={'em'}>
            The Blog Of Blastz
          </Typography>
        </Toolbar>
      </div>
    )
  }
}

export default withStyles(styles)(TopBar);
