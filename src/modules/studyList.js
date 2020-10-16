import { getContext, takeEvery, select } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { reducerUtils, createAsyncActions, createAsyncSaga } from 'lib/asyncUtils';

const GET_STUDY_LIST = 'studyList/GET_STUDY_LIST';
const GET_STUDY_LIST_SUCCESS = 'studyList/GET_STUDY_LIST_SUCCESS';
const GET_STUDY_LIST_ERROR = 'studyList/GET_STUDY_LIST_ERROR';
const TOGGLE_SELECT = 'studyList/TOGGLE_SELECT';
const CLOSE_SELECT = 'studyList/CLOSE_SELECT';
const CLICK_STUDY_LIST = 'studyList/CLICK_STUDY_LIST';

const initialState = {
  studyList: reducerUtils.initial(),
  searchToggle: false,
  studyId: null,
};

export const toggleSelect = () => ({ type: TOGGLE_SELECT });
export const closeSelect = () => ({ type: CLOSE_SELECT });
export const fetchStudyList = () => ({ type: GET_STUDY_LIST });
export const clickStudyList = (id) => ({ type: CLICK_STUDY_LIST, payload: id });

function* goToDetailSaga() {
  const id = yield select((state) => state.studyList.studyId);
  const history = yield getContext('history');

  history.push(`/studies/detail/${id}`);
}

const fetchStudyListSaga = createAsyncSaga(GET_STUDY_LIST, createStudyAPI.fetchStudyList);

export function* studyListSaga() {
  yield takeEvery(GET_STUDY_LIST, fetchStudyListSaga);
  yield takeEvery(CLICK_STUDY_LIST, goToDetailSaga);
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
        searchToggle: !state.searchToggle,
      };

    case CLOSE_SELECT:
      return {
        ...state,
        searchToggle: false,
      };

    case CLICK_STUDY_LIST:
      return {
        ...state,
        studyId: action.payload,
      };

    default:
      return state;
  }
}
