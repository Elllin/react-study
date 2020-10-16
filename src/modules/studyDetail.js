import { getContext, select, takeEvery } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { createAsyncActionsById, createAsyncSagaById } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_STUDY_DETAIL';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';
const GO_TO_EDIT = 'studyDetail/GO_TO_EDIT';

const initialState = {
  studyDetail: {},
  currentId: null,
};

export const fetchStudyDetail = (id) => ({ type: GET_STUDY_DETAIL, meta: id });
export const goToEdit = (id) => ({ type: GO_TO_EDIT, payload: id });

const fetchStudyDetailSaga = createAsyncSagaById(GET_STUDY_DETAIL, createStudyAPI.fetchStudyDetail);

function* goToEditSaga() {
  const id = yield select((state) => state.studyDetail.currentId);
  const history = yield getContext('history');

  history.push(`/studies/detail/edit/${id}`);
}

export function* studyDetailSaga() {
  yield takeEvery(GET_STUDY_DETAIL, fetchStudyDetailSaga);
  yield takeEvery(GO_TO_EDIT, goToEditSaga);
}

const asyncReducer = createAsyncActionsById(GET_STUDY_DETAIL, 'studyDetail', true);

export default function studyDetail(state = initialState, action) {
  switch (action.type) {
    case GET_STUDY_DETAIL:
    case GET_STUDY_DETAIL_SUCCESS:
    case GET_STUDY_DETAIL_ERROR:
      return asyncReducer(state, action);

    case GO_TO_EDIT:
      return {
        ...state,
        currentId: action.payload,
      };

    default:
      return state;
  }
}
