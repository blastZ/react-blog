import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white'
  },
  appBar: {
    background: 'linear-gradient(to right, #43cea2, #5996d4)'
  }
};

function TopBar(props) {
  const { classes, title, openMenu } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{
        root: classes.appBar
      }}>
        <Toolbar>
          <IconButton onClick={openMenu} className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(TopBar);
