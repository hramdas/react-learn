
import React from 'react'

function MobileOs(){
  const [count, setCount]  = React.useState(1)
  const handleChange = (val)=>{
      setCount(count + val)
  }
    return(
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>handleChange(1)}>Add</button>
            <button onClick={()=>handleChange(-1)}>Reduce</button>
        </>
       
    )
}

export default MobileOs