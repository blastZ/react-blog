import React, { Component } from 'react';
import { view as HomePage } from './homePage';
import { view as PostPage } from './postPage';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:postId" component={PostPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
