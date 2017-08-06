import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { stopCount, startCount, pauseCount } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    const { clockCount } = this.props;

    switch (newStatus) {
      case 'started':
        this.props.startClock(clockCount);
        break;
      case 'stopped':
        this.props.stopClock();
        break;
      case 'paused':
        this.props.pauseClock(clockCount);
        break;
      default:
        break;
    }
  }

  render() {
    const { clockStatus } = this.props;

    console.log('clockStatus:', clockStatus);

    const renderStartStopBtn = () => {
      if (clockStatus === 'started') {
        return (
          <button 
            className="btn btn-primary"
            style={btnStyle}
            onClick={() => this.onStatusChange('paused')}
          >
            Pause
          </button>
        )
      } else {
        return (
          <button 
            className="btn btn-primary"
            style={btnStyle}
            onClick={() => this.onStatusChange('started')}
          >
            Start
          </button>
        )
      }
    }
    return (
      <div style={controlStyle}>
        {renderStartStopBtn()}
        <button 
          className="btn btn-outline-danger"
          style={btnStyle}
          onClick={() => this.onStatusChange('stopped')}
        >
          Clear
        </button>
      </div>
    );
  }
}

const controlStyle = {
  display: 'flex',
  width: '250px',
  justifyContent: 'space-around'
};

const btnStyle = {
  width: '100px'
}

// const mapStateToProps = state => ({
//   count: state.countdown.count,
//   countdownStatus: state.countdown.countdownStatus,
// });

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     startCount, pauseCount, stopCount
//   }, dispatch);
// };

// export default connect(mapStateToProps)(Controls);
export default Controls;
