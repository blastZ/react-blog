import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import { withRouter } from 'react-router';
import Post from './Post';
import Footer from './Footer';

class Container extends Component {
  state = {
    post: {},
    postId: '',
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    let post = this.props.posts.filter((post) => (post.id === postId))[0];
    if(!post) {
      post = {
        id: 'ABCDEFGfdsa',
        title: 'React全栈技术详解',
        timestamp: 'September 20, 2017',
        tag: ['React'],
        shortDescri: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        cover: `http://localhost:5001/posts/imgs/1.jpg`,
        like: 5,
        visit: 10,
        comments: []
      }
    }
    this.setState({
      postId,
      post
    })

  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { postId, post } = this.state;
    return (
      <div>
        <TopBar
          goBack={this.goBack} />
        <div
          className="bg-img"
          style={{
            background: `url(${post.cover})`,
            width: '100%',
            height: '450px',
          }} />
        <Post post={post}/>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ homeReducer }) => ({
  posts: homeReducer.posts
})

export default withRouter(connect(mapStateToProps)(Container));
