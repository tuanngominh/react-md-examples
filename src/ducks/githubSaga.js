import {types} from './github';
import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

function* searchRepos(action) {
  yield delay(300);
  const { keyword } = action;

  try {
    const { data } = yield call(api.get, 'search/repositories', { params: { q: keyword } });
    yield put({
      type: types.SEARCH_REPOS_RESULT,
      result: data
    });
  } catch (e) {
    console.warn(e);
  }
}

export function* watchSearchRepos() {
  yield takeLatest(types.SEARCH_REPOS, searchRepos);
}
