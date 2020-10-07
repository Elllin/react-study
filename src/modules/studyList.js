import { getContext, takeEvery, select } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { reducerUtils, createAsyncActions, createAsyncSaga } from 'lib/asyncUtils';

const GET_STUDY_LIST = 'studyList/GET_STUDY_LIST';
const GET_STUDY_LIST_SUCCESS = 'studyList/GET_STUDY_LIST_SUCCESS';
const GET_STUDY_LIST_ERROR = 'studyList/GET_STUDY_LIST_ERROR';
const TOGGLE_SELECT = 'studyList/TOGGLE_SELECT';
const CLOSE_SELECT = 'studyList/CLOSE_SELECT';

const initialState = {
  studyList: reducerUtils.initial(),
  searchToggle: false,
};

export const toggleSelect = () => ({ type: TOGGLE_SELECT });
export const closeSelect = () => ({ type: CLOSE_SELECT });
export const fetchStudyList = () => ({ type: GET_STUDY_LIST });

const fetchStudyListSaga = createAsyncSaga(GET_STUDY_LIST, createStudyAPI.fetchStudyList);

export function* studyListSaga() {
  yield takeEvery(GET_STUDY_LIST, fetchStudyListSaga);
}
const studyListReducer = createAsyncActions(GET_STUDY_LIST, 'studyList');

export default function studyList(state = initialState, action) {
  switch (action.type) {
    case GET_STUDY_LIST:
    case GET_STUDY_LIST_SUCCESS:
    case GET_STUDY_LIST_ERROR:
      return studyListReducer(state, action);

    case TOGGLE_SELECT:
      return {
        ...state,
        searchToggle: !state.studyList.searchToggle,
      };

    case CLOSE_SELECT:
      return {
        ...state,
        searchToggle: false,
      };

    default:
      return state;
  }
}
