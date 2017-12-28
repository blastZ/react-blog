import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestPosts } from '../actions';
import TopBar from './TopBar';
import PostsGrid from './PostsGrid';
import LinkBar from './LinkBar';

class Container extends Component {
  componentDidMount() {
    this.props.dispatch(getLatestPosts());
  }

  getRecPosts = () => {
    fetch()
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%'}} className="bg-img">

        <PostsGrid />
        <LinkBar />
      </div>
    )
  }
}

export default connect()(Container);
