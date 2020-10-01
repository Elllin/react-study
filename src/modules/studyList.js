import { takeEvery } from 'redux-saga/effects';

const TOGGLE_SELECT = 'studyList/TOGGLE_SELECT';

const initialState = {
  studyList: {
    searchToggle: false,
  },
};

export const toggleSelect = () => ({ type: TOGGLE_SELECT });

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

    default:
      return state;
  }
}
