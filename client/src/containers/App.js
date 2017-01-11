import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from './Main';
import Detail from './Detail';

export default class App extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Main />
        </Route>
        <Route path="/search?query=(:query)" component={Main}>
          <Main {...this.props} />
        </Route>
        <Route path="/movie/:id" component={Detail}>
          <Detail {...this.props} />
        </Route>
      </Router>
    );
  }
}
