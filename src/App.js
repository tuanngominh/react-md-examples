import React, { Component } from 'react';
import Counter from './components/Counter';
import SearchGithubRepos from './components/SearchGithubRepos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <br/><br/>
        <SearchGithubRepos />
      </div>
    );
  }
}

export default App;
