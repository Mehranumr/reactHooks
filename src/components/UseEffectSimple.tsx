import React, { useEffect, useState } from 'react'

function UseEffectSimple() {

    const [counter, setCounter] = useState(0)
    let date: string = new Date().toLocaleDateString();

    useEffect(() => {
        const timer = setInterval(() => setCounter(counter => counter + 1), 1000)
        return () => {
            clearInterval(timer)
        }
    }, [counter])


    return (


        <div>
            <h1>UseEffect Hook Without Object</h1>
            <strong>Date: {date}</strong>
            <br></br>
            &nbsp;<strong>Counter: {counter}</strong>&nbsp;
        </div>
    )
}

export default UseEffectSimple
