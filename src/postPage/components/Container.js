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
    this.setState({
      postId,
      post: this.props.posts.filter((post) => (post.id === postId))[0]
    })

  }

  render() {
    const { postId, post } = this.state;
    return (
      <div>
        <TopBar />
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
  posts: homeReducer.latestPosts
})

export default withRouter(connect(mapStateToProps)(Container));
