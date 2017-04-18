import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchRepos} from '../ducks/github';
import { bindActionCreators } from 'redux';

class SearchGithubRepos extends Component {
  static defaultProps = {
    result: {
      items: []
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      results: []
    }
  }

  handleSearch = (event) => {
    this.props.onSearch(event.target.value);
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    const { result: { items } } = this.props;
    return (
      <div>
        Search github repos: <br/>
        <input value={this.state.keyword} onChange={this.handleSearch} placeholder="repo name"/>
        <div>
          {items.map(repo => (
            <div key={`repo-${repo.id}`}>{repo.name} {repo.description}</div>
          ))}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  result: state.github.searchResult
});

const mapDispatchToProps = dispatch => ({
  onSearch: bindActionCreators(searchRepos, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchGithubRepos);