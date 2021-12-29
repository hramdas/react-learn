import { useEffect, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    console.log('Before useEffect')

    useEffect(()=>{
        //Every time
        console.log("First")
    })

    useEffect(()=>{
        //Only once
        console.log("second")
    }, [])
    useEffect(()=>{
        //Only if count change
        console.log("Third")
    }, [count])

    console.log('After useEffect')

    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add 1</button>
        </>
    )
   }

   export default Counter