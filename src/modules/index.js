import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import createStudy from './createStudy';
import studyDetail, { studyDetailSaga } from './studyDetail';

const rootReducer = combineReducers({ createStudy, studyDetail });

export function* rootSaga() {
  yield all([studyDetailSaga()]);
}

export default rootReducer;
