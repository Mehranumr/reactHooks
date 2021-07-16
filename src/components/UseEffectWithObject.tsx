import React, { useEffect, useState } from 'react'

function UseEffectWithObject() {

    interface IType {
        counter: number,
        date: string
    }

    const [counterObj, setCounter] = useState<IType>({ counter: 0, date: new Date().toLocaleDateString() })

    useEffect(() => {
        const timer = setInterval(() =>
            setCounter(c => {
                return {
                    ...c,
                    counter: c.counter + 1
                }
            }), 1000)
        return () => {
            clearInterval(timer)
        }
    }, [counterObj])


    return (


        <div>
            <h1>UseEffect Hook With Object</h1>
            <strong>Date: {counterObj.date}</strong>
            <br></br>
            &nbsp;<strong>Counter: {counterObj.counter}</strong>&nbsp;
        </div>
    )
}

export default UseEffectWithObject
