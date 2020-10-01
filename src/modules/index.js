import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import createStudy, { createStudySaga } from './createStudy';
import studyDetail, { studyDetailSaga } from './studyDetail';
import studyList from './studyList';

const rootReducer = combineReducers({ createStudy, studyDetail, studyList });

export function* rootSaga() {
  yield all([studyDetailSaga(), createStudySaga()]);
}

export default rootReducer;
