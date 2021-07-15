import React, { useEffect, useState } from 'react'

function UseEffectSimple() {

    const [counter, setCounter] = useState(0)

    //const timeOut = setInterval(() => setCounter(counter => counter + 1), 1000)

    useEffect(() => {
        const c = setInterval(() => setCounter(counter => counter + 1), 1000)
        return () => {
            clearInterval(c)
        }
    }, [counter])


    return (


        <div>
            <h2>Use Effect</h2>
            <p>{counter}</p>
        </div>
    )
}

export default UseEffectSimple
