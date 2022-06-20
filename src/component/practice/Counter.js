import React, {useState} from 'react';
import ButtonExample from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
const reduceNum = (state,action) => {
    console.log(action)
    console.log(state)
    console.log("---------------")
    return state+action
}

const basicNum = 0

const Counter = () => {

const [state,setState] = useState(basicNum)

    const addNum = () =>{
        setState(state+1)
    }
    const decNum = () =>{
        setState(state-1)
    }

    return (
        <div>
            <CounterDisplay number={state}></CounterDisplay>
            <ButtonExample addNum={addNum} decNum={decNum}></ButtonExample>
        </div>
    );
};

export default Counter;