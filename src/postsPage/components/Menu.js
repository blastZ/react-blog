import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { actions } from '../../homePage';
import { withRouter } from 'react-router-dom';

const styles = {
  paper: {
    width: 300,
    maxWidth: '100%'
  },
  avatar: {
    width: 100,
    height: 100,
    '& img': {
      width: '120%',
      maxWidth: '120%',
    }
  }
}

class Menu extends Component {
  state = {
    tagList: [
      {name: 'All', value: 'all', num: 3},
      {name: 'React', value: 'react', num: 2},
      {name: 'Node.js', value: 'node.js', num: 1},
    ],
  }

  toCategory = (category) => () => {
    this.props.history.replace(`/${category}`);
    this.props.dispatch({type: 'GET_POSTS', category});
  }

  render() {
    const { open, classes, closeView } = this.props;
    const { tagList } = this.state;
    return (
      <Drawer open={open} onRequestClose={closeView} classes={{
        paper: classes.paper
      }}>
        <div>
          <div style={{padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, #43cea2, #5996d4)'}}>
            <div style={{paddingBottom: '10px'}}>
              <Avatar className={classes.avatar}
                alt="Cool Fox"
                src={require("../imgs/avatar.jpg")}/>
            </div>
            <div style={{padding: '10px 0px', color: 'white', letterSpacing: '1px'}}>
              <Typography type="title" color="inherit">
                {`Blast Z`}
              </Typography>
            </div>
            <div style={{opacity: '0.9', padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', letterSpacing: '1px'}}>
              <Typography color="inherit">
                {`Life is beautiful when you`}
              </Typography>
              <Typography color="inherit">
                {`realize it, Crateful for it.`}
              </Typography>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 50px', marginTop: '50px'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                <Typography type="title" color="inherit">
                  {`0`}
                </Typography>
                <Typography color="inherit" style={{marginTop: '12px', opacity: '0.9'}}>
                  {`原创`}
                </Typography>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                <Typography type="title" color="inherit">
                  {`3`}
                </Typography>
                <Typography color="inherit" style={{marginTop: '12px', opacity: '0.9'}}>
                  {`转载`}
                </Typography>
              </div>
            </div>
          </div>
          <Divider />
          <List>
            {tagList.map((tag) => (
              <ListItem key={tag.name} button onClick={this.toCategory(tag.value)}>
                <ListItemText primary={tag.name} />
                <Typography>
                  {tag.num}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(withRouter(connect()(Menu)));
