import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  paper: {
    width: 700,
    height: 450,
    maxWidth: '100%',
    background: 'rgba(0,0,0,0.7)',
    boxShadow: 'none',
    borderRadius: '5px',
    color: 'white'
  },
  root: {
    background: 'transparent !important'
  },
  paperContent: {
    color: 'white',
    '& h2': {
      color: 'white'
    }
  },
  button: {
    width: 64,
    height: 64,
    '& img': {
      width: '70%',
      height: '70%'
    }
  }
}

class AppContainer extends Component {
  render() {
    const { closeView, classes, open } = this.props;
    return (
      <Dialog
        classes={{
          paper: classes.paper
        }}
        BackdropProps={{
          classes: {
            root: classes.root
          }
        }}
        open={open}
        onClose={closeView}>
        <DialogTitle classes={{root: classes.paperContent}}>{`My Apps`}</DialogTitle>
        <DialogContent>
          <div className={classes.container}>
            <IconButton color="contrast" className={classes.button} onClick={() => {window.open('http://www.blastz.cn:3000')}}>
              <img src={require('../imgs/book.png')} alt="novel-website" />
            </IconButton>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(AppContainer);
