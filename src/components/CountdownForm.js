import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { startCount, pauseCount, stopCount } from '../actions';
import Controls from './Controls';

class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const seconds = Number(this.seconds.value);
    this.seconds.value = '';
    
    this.props.startCount(seconds);
  }

  render() {
    const { countdownStatus } = this.props;

    return (
      <div style={startForm}>
        {
          countdownStatus === 'stopped' 
          ?
          <form 
            ref={(form) => this.form = form}
            onSubmit={this.handleSubmit}
          >
            <input 
              className="form-control"
              style={countdownInput}
              type="number"
              min="1"
              minLength="1"
              placeholder="Enter time in seconds"
              ref={(seconds) => this.seconds = seconds}
            />
            <button
              className="btn btn-primary btn-block"
              style={countdownBtn}
            >
              Start
            </button>
          </form>
          :
          <Controls 
            startClock={this.props.startCount}
            pauseClock={this.props.pauseCount}
            stopClock={this.props.stopCount}
            clockCount={this.props.count}
            clockStatus={this.props.countdownStatus}
          />
        }
      </div>
      
    );
  }
}

const startForm = {
  margin: '0 auto',
  width: '250px'
};

const countdownInput = {
  marginBottom: '1rem',
  fontSize: '1.25rem'
};

const countdownBtn = {
  fontSize: '1.25rem'
};

const mapStateToProps = state => ({
  count: state.countdown.count,
  countdownStatus: state.countdown.countdownStatus
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    startCount, pauseCount, stopCount
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownForm);
