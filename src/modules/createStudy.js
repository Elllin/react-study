import { getContext, takeEvery, select } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { reducerUtils, createAsyncActions, createAsyncSaga } from 'lib/asyncUtils';

const GET_CREATE_STUDY = 'createStudy/GET_CREATE_STUDY';
const GET_CREATE_STUDY_SUCCESS = 'createStudy/GET_CREATE_STUDY_SUCCESS';
const GET_CREATE_STUDY_ERROR = 'createStudy/GET_CREATE_STUDY_ERROR';
const CREATE_STUDY_RESET = 'createStudy/CREATE_STUDY_RESET';
const DUPLICATION_CHECK = 'createStudy/DUPLICATION_CHECK';
const DUPLICATION_CHECK_SUCCESS = 'createStudy/DUPLICATION_CHECK_SUCCESS';
const DUPLICATION_CHECK_ERROR = 'createStudy/DUPLICATION_CHECK_ERROR ';

const initialState = {
  createStudy: reducerUtils.initial(),
  duplicationCheck: reducerUtils.initial(),
};

export const fetchCreateStudy = (payload) => ({ type: GET_CREATE_STUDY, payload });
export const fetchDuplicationCheck = (payload) => ({ type: DUPLICATION_CHECK, payload });

const fetchCreateStudySaga = createAsyncSaga(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);
const fetchDuplicationCheckSaga = createAsyncSaga(
  DUPLICATION_CHECK,
  createStudyAPI.fetchDuplicationCheck,
);

// function* fetchDuplicationCheckSaga() {
//   try {
//     const res = yield call(fetchFunc, action?.payload);
//     const payload = res.data;
//     console.log(payload);
//     yield put({ type: SUCCESS, payload });
//   } catch (e) {
//     yield put({ type: ERROR, payload: e, error: true });
//   }
// }

function* goToDetailSaga() {
  const id = yield select((state) => state.createStudy.createStudy.data.study_id);
  const history = yield getContext('history');

  history.push(`/studies/detail/${id}`);
}

export function* createStudySaga() {
  yield takeEvery(GET_CREATE_STUDY, fetchCreateStudySaga);
  yield takeEvery(DUPLICATION_CHECK, fetchDuplicationCheckSaga);
  yield takeEvery(GET_CREATE_STUDY_SUCCESS, goToDetailSaga);
}

export const resetData = (dispatch) => {
  dispatch({ type: CREATE_STUDY_RESET });
};

const createStudyReducer = createAsyncActions(GET_CREATE_STUDY, 'createStudy');

const duplicationCheckReducer = createAsyncActions(DUPLICATION_CHECK, 'duplicationCheck');

export default function createStudy(state = initialState, action) {
  switch (action.type) {
    case GET_CREATE_STUDY:
    case GET_CREATE_STUDY_SUCCESS:
    case GET_CREATE_STUDY_ERROR:
      return createStudyReducer(state, action);

    case DUPLICATION_CHECK:
    case DUPLICATION_CHECK_SUCCESS:
    case DUPLICATION_CHECK_ERROR:
      return duplicationCheckReducer(state, action);

    case CREATE_STUDY_RESET:
      return {
        ...state,
        createStudy: reducerUtils.reset(),
      };

    default:
      return state;
  }
}
