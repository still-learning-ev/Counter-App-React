import React from "react";
export default function CounterButton(props) {

    

    function incrementCounterFunction() {
        props.methods.incr(props.value);
    }

    function decrementCounterFunction() {
        props.methods.decr(props.value);
    }

    return (
        <div className='Counter'>
            <button className='counterButton'
                onClick={decrementCounterFunction}
            >-{props.value}</button>
            <button className='counterButton'
                onClick={incrementCounterFunction}
            >+{props.value}</button>
        </div>
    )
}