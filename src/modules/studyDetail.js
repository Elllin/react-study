import { call, put, takeEvery } from 'redux-saga/effects';

import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/studyApi';
import { createAsyncActionsById, createAsyncThunkById } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_STUDY_DETAIL';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';

const initialState = {
  studyDetail: {},
};

export const fetchStudyDetail = createAsyncThunkById(
  GET_STUDY_DETAIL,
  createStudyAPI.fetchStudyDetail,
);

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
