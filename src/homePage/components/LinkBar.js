import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton'

const styles = {
  root: {
    width: '40px',
    height: '100vh',
    position: 'absolute',
    left: '25px',
    top: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: '25px',
    height: '25px'
  },
  divider: {
    height: '120px',
    borderLeft: '2px solid #bdbdbd',
  }
};

class LinkBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.divider} />
        <IconButton className={classes.button} aria-label="github">
          <img className={classes.image} src={`${require('../imgs/github.svg')}`} />
        </IconButton>
        <IconButton className={classes.button} aria-label="github">
          <img className={classes.image} src={`${require('../imgs/stackoverflow.svg')}`} />
        </IconButton>
        <IconButton className={classes.button} aria-label="github">
          <img className={classes.image} src={`${require('../imgs/app.svg')}`} />
        </IconButton>
        <div className={classes.divider} style={{flexGrow: '1'}}/>
      </div>
    )
  }
}

export default withStyles(styles)(LinkBar);
