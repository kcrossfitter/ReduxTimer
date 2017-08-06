import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {

  formatSeconds(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes.toString();
    seconds = seconds < 10 ? '0' + seconds : seconds.toString();

    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="rounded-circle" style={clockStyle}>
        {this.formatSeconds(this.props.totalCounts)}
      </div>
    );
  }
}

const clockStyle = {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '2.5rem',
  background: '#95a5a6',
  border: '1px solid #333',
  width: '250px',
  height: '250px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  color: '#fff'
}

const mapStateToProps = state => ({
  countdown: state.countdown
});

export default connect(mapStateToProps)(Clock);
