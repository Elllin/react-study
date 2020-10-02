import { takeEvery } from 'redux-saga/effects';

const TOGGLE_SELECT = 'studyList/TOGGLE_SELECT';
const CLOSE_SELECT = 'studyList/CLOSE_SELECT';

const initialState = {
  studyList: {
    searchToggle: false,
  },
};

export const toggleSelect = () => ({ type: TOGGLE_SELECT });
export const closeSelect = () => ({ type: CLOSE_SELECT });

export default function studyList(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SELECT:
      return {
        ...state,
        studyList: {
          ...state,
          searchToggle: !state.studyList.searchToggle,
        },
      };

    case CLOSE_SELECT:
      return {
        ...state,
        studyList: {
          ...state,
          searchToggle: false,
        },
      };

    default:
      return state;
  }
}
