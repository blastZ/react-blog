import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PostCard from './PostCard';

const styles = {

}

class PostList extends Component {
  state = {
    fillBoxNum: [],
    posts: [
      {
        id: 'A325GJDKLG',
        title: 'React全栈技术详解',
        timestamp: 'September 20, 2017',
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png'
      },
      {
        id: 'A325GaDKfdsaLG',
        title: 'React Native 使用指南',
        timestamp: 'September 25, 2017',
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: 'https://webinerds.com/app/uploads/2017/11/d49396_d9c5d967608d4bc1bcf09c9574eb67c9-mv2.png'
      },
      {
        id: 'A325GaDfdasKfdsaLG',
        title: 'Node.js 进阶',
        timestamp: 'September 15, 2017',
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
      },
      {
        id: 'A325GaDfdasKfdfdsasaLG',
        title: 'Node.js 进阶',
        timestamp: 'September 15, 2017',
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
      },
      {
        id: 'A325GaDfdasKffdasfdfdsasaLG',
        title: 'Node.js 进阶',
        timestamp: 'September 15, 2017',
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png'
      },
    ]
  }

  componentDidMount() {
    this.addFillBox();
    window.addEventListener('resize', this.addFillBox);
  }

  addFillBox = () => {
    const body = document.getElementsByTagName('body')[0];
    const postList = document.getElementById('post-list');
    const rowNum = parseInt(((body.clientWidth - 64) / 400), 10);
    const passNum = this.state.posts.length % rowNum;
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
    const { posts } = this.state;
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

export default withStyles(styles)(PostList);
