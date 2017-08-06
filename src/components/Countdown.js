import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import { pauseCount } from '../actions';

class Countdown extends Component {
  componentWillUnmount() {
    this.props.pauseCount(this.props.count)
  }

  render() {
    return (
      <div>
        <h2 style={headingStyle}>Countdown</h2>
        <Clock totalCounts={this.props.count} />
        <CountdownForm />
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

const mapStateToProps = state => ({
  count: state.countdown.count
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ pauseCount }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
