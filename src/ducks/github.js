//Actions
export const types = {
  SEARCH_REPOS: 'my-app/github/REPO/SEARCH',
  SEARCH_REPOS_RESULT: 'my-app/github/REPO/SEARCH_REPOS_RESULT',
}

//Reducer
export default function reducer(state = {}, action = {}) {
  console.log(action);
  switch(action.type) {
    case types.SEARCH_REPOS_RESULT:
      return {
        ...state,
        searchResult: action.result
      }
    default:
      return state;
  }
}

//Action Creators
export function searchRepos(keyword) {
  return {
    type: types.SEARCH_REPOS,
    keyword
  }
}