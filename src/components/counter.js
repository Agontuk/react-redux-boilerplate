import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, onIncrement }) => (
    <div>
        <h1>Count: { count }</h1>
        <button onClick={ onIncrement }>Increment</button>
    </div>
);

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
};

export default Counter;
