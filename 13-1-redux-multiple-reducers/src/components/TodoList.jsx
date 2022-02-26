import React from 'react'

export const TodoList = ({todos}) => {
    console.log(todos)
  return (
    <div>
        { todos ? todos.map((e, i)=>(
            <div key={i}>{e.title}</div>
        )):<span></span>}
    </div>
  )
}
