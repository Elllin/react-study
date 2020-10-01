import { getContext, takeEvery, select } from 'redux-saga/effects';

import * as createStudyAPI from 'api/studyApi';
import { reducerUtils, createAsyncActions, createAsyncSaga } from 'lib/asyncUtils';

const GET_CREATE_STUDY = 'createStudy/GET_CREATE_STUDY';
const GET_CREATE_STUDY_SUCCESS = 'createStudy/GET_CREATE_STUDY_SUCCESS';
const GET_CREATE_STUDY_ERROR = 'createStudy/GET_CREATE_STUDY_ERROR';
const CREATE_STUDY_RESET = 'createStudy/CREATE_STUDY_RESET';

const initialState = {
  createStudy: reducerUtils.initial(),
};

export const fetchCreateStudy = (payload) => ({ type: GET_CREATE_STUDY, payload });

const fetchCreateStudySaga = createAsyncSaga(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);

function* goToDetailSaga() {
  // const { id } = createStudy.data;

  const id = yield select((state) => state.createStudy.createStudy.data.study_id);
  console.log(id);
  //위 id를 넣기!!
  const history = yield getContext('history');
  history.push('/detail/1');
}

export function* createStudySaga() {
  yield takeEvery(GET_CREATE_STUDY, fetchCreateStudySaga);
  yield takeEvery(GET_CREATE_STUDY_SUCCESS, goToDetailSaga);
}

// export const fetchCreateStudy = createAsyncThunk(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);

export const resetData = (dispatch) => {
  dispatch({ type: CREATE_STUDY_RESET });
};

const asyncReducer = createAsyncActions(GET_CREATE_STUDY, 'createStudy');

export default function createStudy(state = initialState, action) {
  switch (action.type) {
    case GET_CREATE_STUDY:
    case GET_CREATE_STUDY_SUCCESS:
    case GET_CREATE_STUDY_ERROR:
      return asyncReducer(state, action);

    case CREATE_STUDY_RESET:
      return {
        ...state,
        createStudy: reducerUtils.reset(),
      };

    default:
      return state;
  }
}
