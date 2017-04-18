/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Counter from './components/Counter';
import SearchGithubRepos from './containers/github/SearchRepos';
import AppLayout from './components/AppLayout';
import Add from './containers/form/Add';
import View from './containers/form/View';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout} >
        <IndexRoute component={SearchGithubRepos} />
        <Route path="/github/repos/search" component={SearchGithubRepos} />
        <Route path="/counter" component={Counter} />
        <Route path="/form/add" component={Add} />
        <Route path="/form/view" component={View} />
      </Route>
    </Router>
  );
};

export default Root;