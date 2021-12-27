import React from 'react'
import { nanoid } from 'nanoid'
import  TodoInput from './TodoInput'
import  TodoList from './TodoList'

function Todo(){
  const [list, setList] = React.useState([])

  const handleClick = (data)=>{
    let params = {
      title : data,
      status : false,
      id : nanoid(7)
    }
    setList([...list, params])
}

 return (
   <>
   < TodoInput getData = {handleClick} />
   <div>
    {list.map((e)=>(
      <TodoList key={e.id} item={e} />
    ))}
   </div>
  
   </>
 )
}

export default Todo