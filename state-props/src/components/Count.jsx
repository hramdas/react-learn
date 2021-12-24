import style from './count.css'
import React from 'react'

function Counter(){
  const [count, setCount]  = React.useState(1)

  const handleChange = (val)=>{
      setCount(count + val)
  }

  const handleInput = (e)=>{
    setCount( (+e.target.value))
    console.log(e.target.value)
  }

    return(
        <>
            <div>
                <h1>Counter : {count}</h1>
                <h3>Counter is {count%2 === 0 ? "Even" : "Odd"} </h3>

                <input value = {count} onChange={handleInput} type="number" />

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