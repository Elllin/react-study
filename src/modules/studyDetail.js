import { call, put, takeEvery } from 'redux-saga/effects';

import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/studyApi';
import { createAsyncActions, createAsyncThunk } from 'lib/asyncUtils';

const GET_STUDY_DETAIL = 'studyDetail/GET_STUDY_DETAIL';
const GET_STUDY_DETAIL_SUCCESS = 'studyDetail/GET_STUDY_DETAIL_SUCCESS';
const GET_STUDY_DETAIL_ERROR = 'studyDetail/GET_STUDY_DETAIL_ERROR';

const initialState = {
  studyDtail: {},
};

// export const getStudyDetail = (id) => ({ type: GET_STUDY_DETAIL, payload: id, meta: id });

// export const fetchCreateStudy = createAsyncThunk(GET_CREATE_STUDY, createStudyAPI.fetchCreateStudy);
export const fetchStudyDetail = (id) => async (dispatch) => {
  dispatch({ type: GET_STUDY_DETAIL, meta: id });
  try {
    const res = await createStudyAPI.fetchStudyDetail(id);
    const payload = res.data;
    dispatch({ type: GET_STUDY_DETAIL_SUCCESS, payload, meta: id });
  } catch (e) {
    dispatch({ type: GET_STUDY_DETAIL_SUCCESS, payload: e, error: true, meta: id });
  }
};

export default function studyDetail(state = initialState, action) {
  const id = action.meta;

  switch (action.type) {
    case GET_STUDY_DETAIL:
      return {
        ...state,
        studyDetail: {
          ...state.studyDetail,
          [id]: reducerUtils.loading(state.studyDetail?.[id].data),
        },
      };
    case GET_STUDY_DETAIL_SUCCESS:
      return {
        ...state,
        studyDetail: {
          ...state.studyDetail,
          [id]: reducerUtils.success(action.payload),
        },
      };
    case GET_STUDY_DETAIL_ERROR:
      return {
        ...state,
        studyDetail: {
          ...state.studyDetail,
          [id]: reducerUtils.error(action.payload),
        },
      };

    default:
      return state;
  }
}
