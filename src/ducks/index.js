import counter from './counter';
import github from './github';
import form from './form';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter,
  github,
  form
});

export default rootReducer;