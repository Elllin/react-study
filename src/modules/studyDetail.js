import { takeEvery } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { createAsyncActionsById, createAsyncSagaById } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_STUDY_DETAIL';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';

const initialState = {
  studyDetail: {},
};


export const fetchStudyDetail = (id) => ({ type: GET_STUDY_DETAIL, meta: id });

const fetchStudyDetailSaga = createAsyncSagaById(GET_STUDY_DETAIL, createStudyAPI.fetchStudyDetail);

export function* studyDetailSaga() {
  yield takeEvery(GET_STUDY_DETAIL, fetchStudyDetailSaga);
}

const asyncReducer = createAsyncActionsById(GET_STUDY_DETAIL, 'studyDetail', true);

export default function studyDetail(state = initialState, action) {
  switch (action.type) {
    case GET_STUDY_DETAIL:
    case GET_STUDY_DETAIL_SUCCESS:
    case GET_STUDY_DETAIL_ERROR:
      return asyncReducer(state, action);

    default:
      return state;
  }
}
