import React, {Component} from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

class SearchGithubRepos extends Component {
  static defaultProps = {
    result: {
      items: []
    }
  }

  render() {
    const { result: { items }, onSearch } = this.props;
    return (
      <div className='md-cell md-cell--12'>
        <div className='md-grid'>
          <h1 className='md-cell md-cell--12'>Search github repos</h1>
          <TextField
            id="searchRepoName"
            label="Search repo"
            placeholder="repo name"
            onChange={onSearch}
            className="md-cell md-cell--12 md-cell--top"
          />
        </div>
        {(items && items.length > 0) && <div className='md-grid'>
            <List className="md-cell md-paper md-cell--12">
              {items.map(repo => (
                <ListItem
                  key={`repo-${repo.id}`}
                  primaryText={repo.name}
                  secondaryText={repo.description}
                  rightIcon={<FontIcon>star</FontIcon>}
                />
              ))}
            </List>
          </div>
        }
      </div>
    )
  }
};

export default SearchGithubRepos;