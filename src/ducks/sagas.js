import { watchIncrementAsync } from './counterSaga';
import { watchSearchRepos } from './githubSaga';
import { watchSaveForm2 } from './formSaga';

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchSearchRepos(),
    watchSaveForm2()
  ]
}