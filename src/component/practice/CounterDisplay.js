import React from 'react';

const CounterDisplay = ({number}) => {
    console.log(number)
    return (
        <div>
            <h1>{number}</h1>
        </div>
    );
};

export default CounterDisplay;