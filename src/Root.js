import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Counter from './components/Counter';
import SearchGithubRepos from './containers/github/SearchRepos';
import AppLayout from './components/AppLayout';
import Form1 from './components/forms/Form1';
import Form2 from './containers/form/Form2';
import Form3 from './containers/form/Form3';
import Result from './containers/form/Result';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout} >
        <IndexRoute component={SearchGithubRepos} />
        <Route path="/forms/form1" component={Form1} />
        <Route path="/forms/form2" component={Form2} />
        <Route path="/forms/form3" component={Form3} />
        <Route path="/forms/result" component={Result} />
        <Route path="/github/repos/search" component={SearchGithubRepos} />
        <Route path="/counter" component={Counter} />
      </Route>
    </Router>
  );
};

export default Root;