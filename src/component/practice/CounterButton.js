import React from 'react';

const CounterButton = ({addNum,decNum}) => {
    return (
        <div>
            <button onClick={(event)=>addNum()}>+</button>
            <button onClick={(event)=>decNum()}>-</button>
        </div>
    );
};

export default CounterButton;