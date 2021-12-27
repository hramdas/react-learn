import style from './count.css'
import React from 'react'

function Counter(){
  const [count, setCount]  = React.useState(1)
  const [query, setQuery] = React.useState()

  const handleChange = (val)=>{
      setCount(count + val)
  }

  const handleInput = (e)=>{
    setQuery( (+e.target.value))
  }

  const handleUpdate = ()=>{
    setCount(query)
  }

    return(
        <>
            <div>
                <h1>Counter : {count}</h1>
                <h3>Counter is {count%2 === 0 ? "Even" : "Odd"} </h3>

                <input value = {query} onChange={handleInput} type="number" />
                <button onClick={()=>handleUpdate()}>Update</button>

                <br />

                <button className='btn1' onClick={()=>handleChange(1)}>Add</button>

                {count >0 &&
                <button className='btn2'  onClick={()=>count>0 ? handleChange(-1) : null} >Reduce</button>
                }

                <button className='btn1' onClick={()=>handleChange(count)}>Double</button>
               
            </div>  
        </>
    )
}

export default Counter