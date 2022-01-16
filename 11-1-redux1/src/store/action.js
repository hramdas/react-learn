// What to do

import { ADD_LOADING, ADD_TODO, ADD_ERROR, GET_LOADING, GET_TODO, GET_ERROR } from "./actionTypes";

export const addLoading = ()=>{
       return { 
           type : ADD_LOADING
        }
}
export const addTodo = (data)=>{
    return {
        type : ADD_TODO,
        payload : data
    }
}
export const addErro = ()=>{
    return{
        type : ADD_ERROR
    }
}

export const getTodo = (data)=>{
    return {
        type : GET_TODO,
        payload : data
    }
}