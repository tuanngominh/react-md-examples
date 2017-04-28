import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Counter from './components/Counter';
import SearchGithubRepos from './containers/github/SearchRepos';
import AppLayout from './components/AppLayout';
import Add from './containers/form/Add';
import View from './containers/form/View';
import Form1 from './components/grid/Form1';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout} >
        <IndexRoute component={SearchGithubRepos} />
        <Route path="/grid/form-buttons" component={Form1} />
        <Route path="/github/repos/search" component={SearchGithubRepos} />
        <Route path="/counter" component={Counter} />
        <Route path="form">
          <Route path="add" component={Add} />
          <Route path="view" component={View} />
        </Route>

      </Route>
    </Router>
  );
};

export default Root;