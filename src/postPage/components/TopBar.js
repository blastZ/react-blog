import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui-icons/NavigateBefore';

const styles = {
  root: {
    width: '100%',
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white'
  },
  appBar: {
    background: 'linear-gradient(to right, #43cea2, #5996d4)'
  }
};

function TopBar(props) {
  const { classes, title, openMenu, goBack } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{
        root: classes.appBar
      }}>
        <Toolbar>
          <IconButton onClick={goBack} className={classes.backButton} aria-label="Menu">
            <BackIcon />
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
