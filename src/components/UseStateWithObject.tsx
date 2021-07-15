import React, { useState } from 'react'
import { Interface } from 'readline'
import { getJSDocDeprecatedTag, StringMappingType } from 'typescript';

export default function UseStateWithObject() {

    // Object Type
    interface ICountDataType {
        date: string,
        count: number

    };

    // initial state with object
    const [countState, setCountState] = useState<ICountDataType>({ date: new Date().toLocaleDateString(), count: 0 })

    function Increase() {
        setCountState(countState => {
            return { ...countState, count: countState.count + 1 }
        })
    }

    function Decrease() {
        setCountState(countState => {
            return { ...countState, count: countState.count - 1 }
        })
    }

    return (
        <div>
            <h1>UseState Hook With Object</h1>
            <strong>Date: {countState.date}</strong>
            <br></br>
            <button onClick={Decrease}>-</button>
            &nbsp;<strong>Counter: {countState.count}</strong>&nbsp;
            <button onClick={Increase}>+</button>
        </div>
    );
}
