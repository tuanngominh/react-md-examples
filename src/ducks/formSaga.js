import {types} from './form';
import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { hashHistory } from 'react-router';

function* saveForm2(action) {
  console.log(action);
  yield delay(300);
  const { data } = action;

  yield put({
    type: types.SAVE_FORM_2_RESULT,
    data
  });

  yield(call(hashHistory.push, '/forms/result'));
}

export function* watchSaveForm2() {
  yield takeLatest(types.SAVE_FORM_2, saveForm2);
}
