import counter from './counter';
import github from './github';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter,
  github
});

export default rootReducer;