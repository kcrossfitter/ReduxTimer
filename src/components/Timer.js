import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Clock from './Clock';
import Controls from './Controls';
import {
  startTimer,
  pauseTimer,
  stopTimer
} from '../actions';

class Timer extends Component {
  render() {
    return (
      <div>
        <h2 style={headingStyle}>Timer</h2>
        <Clock totalCounts={this.props.count} />
        <div style={controlStyle}>
          <Controls 
            startClock={this.props.startTimer}
            pauseClock={this.props.pauseTimer}
            stopClock={this.props.stopTimer}
            clockCount={this.props.count}
            clockStatus={this.props.timerStatus}
          />
        </div> 
      </div>
    );
  }
}

const headingStyle = {
  textAlign: 'center',
  marginTop: '2.5rem',
  marginBottom: '2.5rem',
  color: '#555'
};

const controlStyle = {
  margin: '0 auto',
  width: '250px'
};

const mapStateToProps = state => ({
  count: state.timer.count,
  timerStatus: state.timer.timerStatus
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    startTimer, pauseTimer, stopTimer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
