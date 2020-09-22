import { combineReducers } from 'redux';

import createStudy from './createStudy';
import studyDetail from './studyDetail';

const rootReducer = combineReducers({ createStudy, studyDetail });

export default rootReducer;
