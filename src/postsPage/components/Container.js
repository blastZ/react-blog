import React, { Component } from 'react';
import Menu from './Menu';
import PostList from './PostList';
import TopBar from './TopBar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action } from '../../homePage';

class Container extends Component {
  state = {
    showMenu: false
  }

  shouldShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  componentDidMount() {
    if(this.props.posts.length === 0) {
      const category = this.props.match.params.category;
      this.props.dispatch({type: 'GET_POSTS', category});
    }
  }

  render() {
    return (
      <div>
        <TopBar
          title="Blog"
          openMenu={this.shouldShowMenu} />
        <Menu
          open={this.state.showMenu}
          closeView={this.shouldShowMenu} />
        <PostList
          showPersonalInfo={this.state.showPersonalInfo}
          openPersonalInfo={this.openPersonalInfo} />
      </div>
    )
  }
}

const mapStateToProps = ({ homeReducer }) => ({
  posts: homeReducer.posts
})

export default withRouter(connect(mapStateToProps)(Container));
