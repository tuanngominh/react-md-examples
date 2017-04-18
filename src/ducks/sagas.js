import { watchIncrementAsync } from './counterSaga';
import { watchSearchRepos } from './githubSaga';

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchSearchRepos(),
  ]
}