import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTodo, getData } from '../store/action'
import {todos} from '../utils/request'

export const TodoList = () => {
    const dispatch = useDispatch()

    async function getTodos(){
        // const {data} = await todos.get('/')
        dispatch(getData)
        // getData()
    }
   
    useEffect(() => {
        getTodos()
    }, []);

    const todoData = useSelector((state)=>state.TodoReducer)
   
  return (
    <div>
        { todoData ? todoData.map((e, i)=>(
            <div key={i}>{e.title}</div>
        )):<span></span>}

    </div>
  )
}
