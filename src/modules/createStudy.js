import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/createStudy';
import { createAsyncActions, createAsyncThunk } from 'lib/asyncUtils';

const GET_CREATE_STUDY = 'createStudy/GET_CREATE_STUDY';
const GET_CREATE_STUDY_SUCCESS = 'createStudy/GET_CREATE_STUDY_SUCCESS';
const GET_CREATE_STUDY_ERROR = 'createStudy/GET_CREATE_STUDY_ERROR';
const CREATE_STUDY_RESET = 'createStudy/CREATE_STUDY_RESET';

const initialState = {
  createStudy: reducerUtils.initial(),
};

export const fetchCreateStudy = createAsyncThunk(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);

export const resetData = (dispatch) => {
  dispatch({ type: CREATE_STUDY_RESET });
};

const asyncReducer = createAsyncActions(GET_CREATE_STUDY, createStudy);

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
