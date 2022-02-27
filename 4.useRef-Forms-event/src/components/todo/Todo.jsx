import React from 'react'
import { nanoid } from 'nanoid'
import  TodoInput from './TodoInput'
import  TodoList from './TodoList'

function Todo(){
  const [list, setList] = React.useState([])

  const handleClick = (data)=>{
    const payload = {
      title : data,
      status : false,
      id : nanoid(7)
    }
    setList([...list, payload])
}

const handleStatus = ({key, e})=>{
  const editStatus = {id : e.id, title: e.title, status: !e.status}

  let res = list.map((item)=> item.id !== key ? item : editStatus);

  setList(res)
}

 return (
   <>
   < TodoInput getData = {handleClick} />
   <div>
    {list.map((e)=>(
      <TodoList key={e.id} item={e} handleStatus={handleStatus} />
    ))}
   </div>
  
   </>
 )
}

export default Todo