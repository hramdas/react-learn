import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action';
import { Input } from './Input';
import { TodoList } from './TodoList';


export const Todo = () => {
    // const [todos, setTodos] = useState([]);

    // let scrollStyle = ()=>{scrollTop > 0 ? backgroundColor :"red" : backgroundColor:"white"}
  
  return (
    <div >
        <Input />
        <TodoList />
  
    </div>
  )
}
