import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchRepos} from '../../ducks/github';
import { bindActionCreators } from 'redux';
import SearchGithubRepos from '../../components/SearchGithubRepos';

class SearchRepos extends Component {
  render() {
    const { result, onSearch } = this.props;
    return (
      <SearchGithubRepos
        result={result}
        onSearch={onSearch}
      />
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