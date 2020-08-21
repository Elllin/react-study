import { reducerUtils } from '/lib/asyncUtils';

const CREATE_STUDY = 'createStudy/CREATE_STUDY';
const CREATE_STUDY_SUCCESS = 'createStudy/CREATE_STUDY_SUCCESS';
const CREATE_STUDY_ERROR = 'createStudy/CREATE_STUDY_ERROR';

const initialState = {
  createStudy: reducerUtils.initial(),
};

// export const

export default function createStudy(state = initialState, action) {
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
        createStudy: reducerUtils.error(action.error),
      };

    default:
      return state;
  }
}
