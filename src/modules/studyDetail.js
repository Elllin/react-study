import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/studyApi';
import { createAsyncActions, createAsyncThunk } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_STUDY_DETAIL';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';

const initialState = {
  studyDtail: {},
};

// export const fetchCreateStudy = createAsyncThunk(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);
export const fetchCreateStudy = (id) => (dispatch) => {
  dispatch({ type: GET_STUDY_DETAIL });
  try {
    const payload = createStudyAPI.fetchStudyDetail(id);
    dispatch({ type: GET_STUDY_DETAIL_SUCCESS, payload, meta: id });
  } catch (e) {
    dispatch({ type: GET_STUDY_DETAIL_SUCCESS, payload: e, error: true, meta: id });
  }
};

const asyncReducer = (state, action) => {
  const id = action.meta;
  switch (action.type) {
    case GET_STUDY_DETAIL:
    case GET_STUDY_DETAIL_SUCCESS:
    case GET_STUDY_DETAIL_ERROR:

    default:
      return state;
  }
};

export default function createStudy(state = initialState, action) {
  switch (action.type) {
    case GET_STUDY_DETAIL:
    case GET_STUDY_DETAIL_SUCCESS:
    case GET_STUDY_DETAIL_ERROR:
      return asyncReducer(state, action);

    default:
      return state;
  }
}
