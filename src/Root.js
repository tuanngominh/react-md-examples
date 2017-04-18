/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Counter from './components/Counter';
import SearchGithubRepos from './components/SearchGithubRepos';
import AppLayout from './components/AppLayout';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout} >
        <IndexRoute component={SearchGithubRepos} />
        <Route path="github/repos/search" component={SearchGithubRepos} />
        <Route path="counter" component={Counter} />
      </Route>
    </Router>
  );
};

export default Root;