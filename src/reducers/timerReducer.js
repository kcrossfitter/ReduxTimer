import {
  START_TIMER,
  PAUSE_TIMER,
  STOP_TIMER
} from '../actions/types';

const initialState = {
  count: 0,
  timerStatus: 'stopped'    // stopped, started, paused
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        count: action.seconds,
        timerStatus: action.timerStatus
      }
    case PAUSE_TIMER:
      return {
        ...state,
        count: action.seconds,
        timerStatus: action.timerStatus
      };
    case STOP_TIMER:
      return {
        ...state,
        count: 0,
        timerStatus: action.timerStatus
      };
    default:
      return state;
  }
}