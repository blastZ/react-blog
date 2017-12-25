import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PostCard from './PostCard';
import { connect } from 'react-redux';

const styles = {

}

class PostList extends Component {
  state = {
    fillBoxNum: [],
  }

  componentDidMount() {
    this.addFillBox();
    window.addEventListener('resize', this.addFillBox);
  }

  addFillBox = () => {
    const body = document.getElementsByTagName('body')[0];
    const postList = document.getElementById('post-list');
    const rowNum = parseInt(((body.clientWidth - 64) / 400), 10);
    const passNum = this.props.posts.length % rowNum;
    const num = rowNum - passNum;
    if(num !== this.state.fillBoxNum.length) {
      if(passNum === 0) {
        this.setState({
          fillBoxNum: []
        })
      } else {
        const fillBoxNum = [];
        for(let i=0; i<num; i++) {
          fillBoxNum.push(i);
        }
        this.setState({
          fillBoxNum
        })
      }
    }
  }

  render() {
    const { classes, showPersonalInfo } = this.props;
    const { posts } = this.props;
    return (
      <div style={{padding: '32px'}}>
        <div id="post-list" className="flex-fill-box" style={{display: 'flex', flexWrap: 'wrap', padding: '64px 0px', justifyContent: 'space-around'}}>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              timestamp={post.timestamp}
              shortDescri={post.shortDescri}
              cover={post.cover}/>
          ))}
          {this.state.fillBoxNum.map((num) => (
            <div key={num} style={{flexBasis: '400px'}} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ homeReducer }) => ({
  posts: homeReducer.posts
})

export default withStyles(styles)(connect(mapStateToProps)(PostList));
