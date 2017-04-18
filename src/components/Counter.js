/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../ducks/counter';
import { bindActionCreators } from 'redux';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => <div>
  <button onClick={onIncrement}>
    Increment
  </button>
  <button onClick={onIncrementAsync}>
    Increment Async
  </button>
  {' '}
  <button onClick={onDecrement}>
    Decrement
  </button>
  <hr />
  <div>
    Clicked: {value} times
  </div>
</div>


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrement: bindActionCreators(increment, dispatch),
  onDecrement: bindActionCreators(decrement, dispatch),
  onIncrementAsync: bindActionCreators(incrementAsync, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
