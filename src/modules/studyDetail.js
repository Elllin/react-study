import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/studyApi';
import { createAsyncActions, createAsyncThunk } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_CREATE_STUDY';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';

const initialState = {
  studyDtail: reducerUtils.initial(),
};

export const fetchCreateStudy = createAsyncThunk(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);

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
