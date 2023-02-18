import React, { useState } from 'react'
import CounterButton from './CounterButton';
import './counter.css'



export default function Counter() {

    const [count, setCount] = useState(0);
    const fun={
        incr:incrementCounterParentFunction,
        decr:decrementCounterParentFunction

    }
    function incrementCounterParentFunction(by){
        setCount(count+by)
    }
    function decrementCounterParentFunction(by){
        setCount(count-by)
    }
    return (
        <>
            <div className='count'>{count}</div>
            <CounterButton value={1} methods={fun}/>
            <CounterButton value={2} methods={fun}/>
            <CounterButton value={5} methods={fun}/>
            <button className='resetButton' onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}



