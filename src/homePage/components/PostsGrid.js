import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { connect } from 'react-redux';
import Subheader from 'material-ui/List/ListSubheader';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input';
import FavoIcon from 'material-ui-icons/Favorite';
import CommentIcon from 'material-ui-icons/Forum';
import VisibIcon from 'material-ui-icons/Visibility';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  contentLeft: {
    width: '50%',
  },
  postTop: {
    width: '100%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postTopMain: {
    width: '65%',
    display: 'flex',
    alignItems: 'center'
  },
  postContent: {
    width: '100%',
    height: 'calc(100vh - 128px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContentMain: {
    width: '50%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    width: '80px',
    background: '#F5AF01',
    color: 'white',
  },
  postBottom: {
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBottomMain: {
    width: '85%',
    marginLeft: '90px',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: '0'
  }
};

class PostsGrid extends Component {
  state = {
    postIndex: 0,
    animation: false
  }

  toPost = () => {
    this.props.history.push(`/all/${this.props.posts[this.state.postIndex].id}`);
  }

  handleWheel = (e) => {
    const { animation } = this.state;
    if(!animation) {
      this.setState({
        animation: true
      })
      setTimeout(() => {
        this.setState({
          animation: false
        })
      }, 900)
    }
    // if(e.deltaY > 0) {
    //   const index = this.state.postIndex + 1;
    //   this.setState({
    //     postIndex: index >= this.props.posts.length ? 0 : index
    //   })
    // } else {
    //   const index = this.state.postIndex - 1;
    //   this.setState({
    //     postIndex: index < 0 ? this.props.posts.length - 1 : index
    //   })
    // }
  }

  render() {
    const { postIndex } = this.state;
    const { classes, posts } = this.props;
    return (
      <div className={classes.root} onWheel={this.handleWheel}>
        <div className={classes.content}>
          {posts[postIndex] && <div style={{display: 'flex', width: '100%', height: '100%'}}>
            <div className={classes.contentLeft}>
              <div className={classes.postTop}>
                <div className={classes.postTopMain}>
                  <Typography type="title">{`Blastz`}</Typography>
                  <IconButton aria-label="Delete" style={{marginLeft: '5px'}}>
                    <MenuIcon />
                  </IconButton>
                  <img src={`${require('../imgs/search.svg')}`} style={{marginLeft: '40px', width: '20px'}}/>
                  <Input
                    style={{marginLeft: '15px', width: '90px'}}
                    placeholder="Search"
                    classes={{
                      input: classes.input
                    }}
                  />
                </div>
              </div>
              <div className={classes.postContent}>
                <div className={classes.postContentMain}>
                  <Typography type="display1" className={`${this.state.animation ? 'top-out-animation-first' : ''}`}>{posts[postIndex].title}</Typography>
                  <Typography type="headline" style={{color: '#F5AF01'}} className={`${this.state.animation ? 'top-out-animation-second' : ''}`}>{posts[postIndex].tag[0]}</Typography>
                  <Typography type="title" className={`${this.state.animation ? 'top-out-animation-second' : ''}`}>{posts[postIndex].timestamp}</Typography>
                  <Button onClick={this.toPost} raised className={classNames(classes.button, `${this.state.animation ? 'top-out-animation-third' : ''}`)}>Read</Button>
                </div>
              </div>
              <div className={classes.postBottom}>
                <div className={classes.postBottomMain}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography type="title">{`${postIndex + 1} of ${posts.length}`}</Typography>
                    <img src={`${require('../imgs/arrow-right.svg')}`} style={{marginLeft: '8px'}} />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton aria-label="favorite">
                      <FavoIcon />
                    </IconButton>
                    <Typography type="subheading" style={{marginRight: '10px'}}>{posts[postIndex].like}</Typography>
                    <IconButton aria-label="visit">
                      <VisibIcon />
                    </IconButton>
                    <Typography type="subheading" style={{marginRight: '10px'}}>{posts[postIndex].like}</Typography>
                    <IconButton aria-label="comment">
                      <CommentIcon />
                    </IconButton>
                    <Typography type="subheading" style={{marginRight: '10px'}}>{posts[postIndex].comments.length}</Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-img" style={{background: `#e3e3e3`, width: '50%', height: '100%'}} />
          </div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ homeReducer }) => ({
  posts: homeReducer.latestPosts
})

export default withStyles(styles)(withRouter(connect(mapStateToProps)(PostsGrid)));
