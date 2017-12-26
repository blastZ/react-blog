import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestPosts } from '../actions';

class Container extends Component {
  componentDidMount() {
    this.props.dispatch(getLatestPosts());
  }

  getRecPosts = () => {
    fetch()
  }

  render() {
    return (
      <div>
        HomePage
        <button onClick={() => this.props.history.push('/all')}>Click Me!</button>
      </div>
    )
  }
}

export default connect()(Container);
