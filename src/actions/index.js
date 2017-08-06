import { 
  START_COUNT,
  PAUSE_COUNT,
  STOP_COUNT,
  START_TIMER,
  PAUSE_TIMER,
  STOP_TIMER
} from './types';

let timerCountdown, timerTimer;

export const startCount = (currentCount) => {
  let newCount = currentCount;

  return (dispatch) => {
    timerCountdown = setInterval(() => {
      if (newCount > 0) {
        dispatch({
          type: START_COUNT,
          countdownStatus: 'started',
          seconds: newCount >= 0 ? newCount-- : 0
        });
      } else {
        clearInterval(timerCountdown);
        dispatch({
          type: STOP_COUNT,
          countdownStatus: 'stopped',
          seconds: 0
        });
      }
      
    }, 1000);
  }
  
}

export const pauseCount = (currentCount) => {
  clearInterval(timerCountdown);
  return {
    type: PAUSE_COUNT,
    countdownStatus: 'paused',
    seconds: currentCount
  };
};

export const stopCount = () => {
  clearInterval(timerCountdown);
  return {
    type: STOP_COUNT,
    countdownStatus: 'stopped',
    seconds: 0
  };
};

export const startTimer = (currentCount) => {
  let newCount = currentCount;

  return (dispatch) => {
    timerTimer = setInterval(() => {
      dispatch({
        type: START_TIMER,
        timerStatus: 'started',
        seconds: ++newCount
      });
    }, 1000);
  }
}

export const pauseTimer = (currentCount) => {
  clearInterval(timerTimer);
  return {
    type: PAUSE_TIMER,
    timerStatus: 'paused',
    seconds: currentCount
  };
};

export const stopTimer = () => {
  clearInterval(timerTimer);
  return {
    type: STOP_TIMER,
    timerStatus: 'stopped',
    seconds: 0
  };
};
