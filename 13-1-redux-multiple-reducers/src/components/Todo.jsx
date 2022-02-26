import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action';
import { Input } from './Input';
import { TodoList } from './TodoList';


export const Todo = () => {
    // const [todos, setTodos] = useState([]);
  
  return (
    <div>
        <Input/>
        <TodoList />
        {/* <TodoList todos={todos}/> */}
    </div>
  )
}
