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
    overflow: 'hidden'
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
    height: '200px'
  },
  postContentMainContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  },
  barNum: {
    width: '40px',
  }
};

class PostsGrid extends Component {
  state = {
    postIndex: 0,
    animation: false,
    touchStart: {x: 0, y: 0},
    touchEnd: {x: 0, y: 0},
  }

  toPost = () => {
    this.props.history.push(`/all/${this.props.posts[this.state.postIndex].id}`);
  }

  handleWheel = (e) => {
    const { animation } = this.state;
    if(e.deltaY > 0) {
      if(!animation) {
        this.setState({
          animation: true
        }, () => {
          setTimeout(() => {
            const index = this.state.postIndex + 1;
            this.setState({
              animation: false,
              postIndex: index >= this.props.posts.length ? 0 : index
            })
          }, 860)
        })
      }
    }
  }

  toPosts = () => {
    this.props.history.push('/all');
  }

  handleTouchStart = (e) => {
    this.setState({
      touchStart: {x: e.touches[0].clientX, y: e.touches[0].clientY}
    })
  }

  handleTouchMove = (e) => {
    if(e.touches[0]) {
      this.setState({
        touchEnd: {x: e.touches[0].clientX, y: e.touches[0].clientY}
      })
    }
  }

  handleTouchEnd = (e) => {
    const { touchStart, touchEnd, animation } = this.state;
    if(touchStart.y - touchEnd.y > 20) {
      if(!animation) {
        this.setState({
          animation: true
        }, () => {
          setTimeout(() => {
            const index = this.state.postIndex + 1;
            this.setState({
              animation: false,
              postIndex: index >= this.props.posts.length ? 0 : index
            })
          }, 860)
        })
      }
    }
  }

  render() {
    const { postIndex, animation } = this.state;
    const { classes, posts } = this.props;
    return (
      <div className={classes.root} onWheel={this.handleWheel} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
        <div className={classes.content}>
          {posts[postIndex] && <div style={{display: 'flex', width: '100%', height: '100%'}}>
            <div className={classNames(classes.contentLeft, 'full-width-small')}>
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
                  {animation
                    ? <div style={{width: '100%', height: '100%', position: 'relative'}}>
                      <div className={classes.postContentMainContent} style={{position: 'absolute', left: '0', top: '0'}}>
                        <Typography type="display1" className="top-out-animation-first">{posts[postIndex].title}</Typography>
                        <Typography type="headline" style={{color: '#F5AF01'}} className="top-out-animation-second">{posts[postIndex].tag[0]}</Typography>
                        <Typography type="title" className="top-out-animation-second">{posts[postIndex].timestamp}</Typography>
                        <Button onClick={this.toPost} raised className={classNames(classes.button, 'top-out-animation-third')}>Read</Button>
                      </div>
                      <div className={classes.postContentMainContent} style={{position: 'absolute', left: '0', top: '0'}}>
                        <Typography style={{opacity: '0'}} type="display1" className="bottom-in-animation-first">{posts[postIndex + 1 >= posts.length ? 0 : postIndex + 1].title}</Typography>
                        <Typography style={{opacity: '0', color: '#F5AF01'}} type="headline" className="bottom-in-animation-second">{posts[postIndex + 1 >= posts.length ? 0 : postIndex + 1].tag[0]}</Typography>
                        <Typography style={{opacity: '0'}} type="title" className="bottom-in-animation-second">{posts[postIndex + 1 >= posts.length ? 0 : postIndex + 1].timestamp}</Typography>
                        <Button style={{opacity: '0'}} onClick={this.toPost} raised className={classNames(classes.button, 'bottom-in-animation-third')}>Read</Button>
                      </div>
                    </div>
                    : <div className={classes.postContentMainContent}>
                      <Typography type="display1" >{posts[postIndex].title}</Typography>
                      <Typography type="headline" style={{color: '#F5AF01'}}>{posts[postIndex].tag[0]}</Typography>
                      <Typography type="title">{posts[postIndex].timestamp}</Typography>
                      <Button onClick={this.toPost} raised className={classNames(classes.button)}>Read</Button>
                    </div>}

                </div>
              </div>
              <div className={classes.postBottom}>
                <div className={classNames(classes.postBottomMain, 'decrease-margin-small')}>
                  {animation
                    ? <div style={{position: 'relative'}}>
                      <PostIndexBar
                        style={{display: 'flex', alignItems: 'center', position: 'absolute'}}
                        index={postIndex + 1}
                        count={posts.length}
                        animation={'OUT'}
                        toPosts={this.toPosts} />
                      <PostIndexBar
                        style={{display: 'flex', alignItems: 'center', opacity: '0'}}
                        index={postIndex + 2 > posts.length ? 1 : postIndex + 2}
                        count={posts.length}
                        animation={'IN'}
                        toPosts={this.toPosts} />
                    </div>
                    : <PostIndexBar
                      style={{display: 'flex', alignItems: 'center'}}
                      index={postIndex + 1}
                      count={posts.length}
                      toPosts={this.toPosts} />}
                  {animation
                    ? <div style={{position: 'relative'}}>
                      <PostInfoBar
                        style={{display: 'flex', alignItems: 'center', position: 'absolute'}}
                        className={classes.barNum}
                        animation={'OUT'}
                        post={posts[postIndex]} />
                      <PostInfoBar
                        style={{display: 'flex', alignItems: 'center', opacity: '0'}}
                        className={classes.barNum}
                        animation={'IN'}
                        post={posts[postIndex + 1 >= posts.length ? 0 : postIndex + 1]} />
                    </div>
                    : <PostInfoBar
                      style={{display: 'flex', alignItems: 'center'}}
                      className={classes.barNum}
                      post={posts[postIndex]} />}
                </div>
              </div>
            </div>
            {animation
              ? <div style={{width: '50%', height: '100%', position: 'relative', overflow: 'hidden'}} className="disappear-small">
                <div className="bg-img anim-img-out" style={{background: `url(${posts[postIndex].cover})`, width: '100%', height: '100%', position: 'absolute'}} />
                <div className="bg-img anim-img-in" style={{background: `url(${posts[postIndex + 1 >= posts.length ? 0 : postIndex + 1].cover})`, width: '100%', height: '100%'}} />
              </div>
              : <div className="bg-img disappear-small" style={{background: `url(${posts[postIndex].cover})`, width: '50%', height: '100%'}} />}
          </div>}
        </div>
      </div>
    )
  }
}

const PostInfoBar = ({ style, className, animation, post }) => (
  <div style={style} className={`${animation === 'IN' && 'anim-bar-in'} ${animation === 'OUT' && 'anim-bar-out'}`}>
    <IconButton aria-label="favorite">
      <FavoIcon />
    </IconButton>
    <Typography type="subheading" className={classNames(className, 'decrease-font-size-small')}>{post.like}</Typography>
    <IconButton aria-label="visit">
      <VisibIcon />
    </IconButton>
    <Typography type="subheading" className={classNames(className, 'decrease-font-size-small')}>{post.visit}</Typography>
    <IconButton aria-label="comment">
      <CommentIcon />
    </IconButton>
    <Typography type="subheading" className={classNames(className, 'decrease-font-size-small')}>{post.comments.length}</Typography>
  </div>
)

const PostIndexBar = ({ style, index, count, animation, toPosts }) => (
  <div style={style} className={`${animation === 'IN' && 'anim-num-in'} ${animation === 'OUT' && 'anim-num-out'}`}>
    <Typography type="title" style={{whiteSpace: 'nowrap'}}>{`${index} of ${count}`}</Typography>
    <IconButton onClick={toPosts} aria-label="toPosts" style={{marginLeft: '8px'}}>
      <img src={`${require('../imgs/arrow-right.svg')}`} />
    </IconButton>
  </div>
)

const mapStateToProps = ({ homeReducer }) => ({
  posts: homeReducer.latestPosts
})

export default withStyles(styles)(withRouter(connect(mapStateToProps)(PostsGrid)));
