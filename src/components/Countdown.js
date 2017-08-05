import React, { Component } from 'react';

class Countdown extends Component {
  render() {
    return (
      <div>
        <h2 style={headingStyle}>Countdown</h2>
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

export default Countdown;
