import {
  START_COUNT,
  PAUSE_COUNT,
  STOP_COUNT
} from '../actions/types';

const initialState = {
  count: 0,
  countdownStatus: 'stopped'     // stopped, paused, started
};

export default (state = initialState, action) => {

  switch (action.type) {
    case START_COUNT:
      return {
        ...state,
        count: action.seconds,
        countdownStatus: action.countdownStatus
      };
    case PAUSE_COUNT:
      return {
        ...state,
        count: action.seconds,
        countdownStatus: action.countdownStatus
      };
    case STOP_COUNT:
      return {
        ...state,
        count: 0,
        countdownStatus: action.countdownStatus
      };
    default:
      return state;
  }
    
}
