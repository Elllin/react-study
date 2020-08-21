import { reducerUtils } from 'lib/asyncUtils';
import * as createStudyAPI from 'api/createStudy';

const CREATE_STUDY = 'CREATE_STUDY';
const CREATE_STUDY_SUCCESS = 'CREATE_STUDY_SUCCESS';
const CREATE_STUDY_ERROR = 'CREATE_STUDY_ERROR';

const initialState = {
  createStudy: reducerUtils.initial(),
};

export const fetchCreateStudy = (data) => async (dispatch) => {
  // console.log(data, '11');

  dispatch({ type: 'CREATE_STUDY' });
  try {
    const res = await createStudyAPI.fetchCreateStudy(data);
    dispatch({ type: CREATE_STUDY_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: CREATE_STUDY_ERROR, payload: error, error: true });
  }
};

export default function createStudy(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CREATE_STUDY:
      return {
        ...state,
        createStudy: reducerUtils.loading(),
      };
    case CREATE_STUDY_SUCCESS:
      return {
        ...state,
        createStudy: reducerUtils.success(action.payload),
      };
    case CREATE_STUDY_ERROR:
      return {
        ...state,
        createStudy: reducerUtils.error(action.payload),
      };

    default:
      return state;
  }
}
