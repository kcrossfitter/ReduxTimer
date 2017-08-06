import { combineReducers } from 'redux';

import countdownReducer from './countdownReducer';
import timerReducer from './timerReducer';

export default combineReducers({
  countdown: countdownReducer,
  timer: timerReducer
});
