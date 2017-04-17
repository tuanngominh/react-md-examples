import hello from './hello';
import {watchIncrementAsync} from './counter';

export default function* rootSaga() {
  yield [
    hello(),
    watchIncrementAsync()
  ]
}