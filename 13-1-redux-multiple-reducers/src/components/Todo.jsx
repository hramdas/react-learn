import React, { useState } from 'react'
import { Input } from './Input';
import { TodoList } from './TodoList';

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const handleTodo = (todo)=>{
        const payload = {
            title :todo,
            status:false
        }
        setTodos([...todos, payload])
    }
  return (
    <div>
        <Input handleTodo={handleTodo}/>
        <TodoList todos={todos}/>
    </div>
  )
}
