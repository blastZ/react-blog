import React, { Component } from 'react';
import Menu from './Menu';
import PostList from './PostList';
import TopBar from './TopBar';

export default class Container extends Component {
  state = {
    showMenu: false
  }

  shouldShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
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
