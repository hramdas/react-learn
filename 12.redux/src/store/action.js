import { ADD_TODO, REMOVE_TODO, ADD_COUNTER, ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING } from "./actionTypes";

// export const addTodo = (data)=>({   //object
//     type : ADD_TODO,
//     payload : data,
// })
// export const addCounter = (data)=>({  
//     type : ADD_COUNTER,
//     payload : data,
// })

export const addTodoLoading =()=>{
    return {
        type : ADD_TODO_LOADING,
    };
}
export const addTodoSuccess =()=>{
    return {
        type : ADD_TODO_SUCCESS,
    };
}

export const removeTodo = (id)=>({   
    type : REMOVE_TODO,
    payload : id,
})

export const getTodoSuccess = (data)=>({   
    type : GET_TODO_SUCCESS,
    payload : data,
})
export const getTodoLoading = (data)=>({   
    type : GET_TODO_LOADING,
    payload : data,
})

