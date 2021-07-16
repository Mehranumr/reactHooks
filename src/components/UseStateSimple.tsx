import React, { useState } from 'react'
import { Interface } from 'readline'
import { getJSDocDeprecatedTag, StringMappingType } from 'typescript';

export default function UseStateSimple() {

    let InitialCount: number = 0;
    let initialDate: string = new Date().toLocaleDateString();

    // initial state with single value
    const [count, setCount] = useState(InitialCount)
    const [date, setDate] = useState(initialDate)

    function Increase() {
        setCount(count => count + 1)
        setDate(date => new Date().toLocaleDateString())
    }

    function Decrease() {
        setCount(count => count - 1)
        setDate(date => new Date().toLocaleDateString())
    }


    return (
        <div>
            <h1>UseState Hook Without Object</h1>
            <strong>Date: {date}</strong>
            <br></br>
            <button onClick={Decrease}>-</button>
            &nbsp;<strong>Counter: {count}</strong>&nbsp;
            <button onClick={Increase}>+</button>

        </div>
    );
}
