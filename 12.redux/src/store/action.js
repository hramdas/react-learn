import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (data)=>({   //object
    type : ADD_TODO,
    payload : data,
})
export const removeTodo = (id)=>({   //object
    type : REMOVE_TODO,
    payload : id,
})
