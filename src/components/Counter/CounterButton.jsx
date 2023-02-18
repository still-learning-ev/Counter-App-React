import React from "react";
export default function CounterButton(props) {

    return (
        <div className='Counter'>
            <button className='counterButton'
                onClick={() => props.methods.decr(props.value)}
            >-{props.value}</button>
            <button className='counterButton'
                onClick={() => props.methods.incr(props.value)}
            >+{props.value}</button>
        </div>
    )
}