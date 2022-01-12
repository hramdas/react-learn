import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR, GET_SUCCESS, GET_LOADING, GET_ERROR } from "./actionTypes";

export const addLoading = ()=>{
    return {
        type : ADD_LOADING
    }
}
export const addSuccess = (data)=>{
    return {
        type : ADD_SUCCESS,
        payload : data,
    }
}
export const addError = (err)=>{
    return {
        type : ADD_ERROR,
        payload : err
    }
}
export const getLoading = ()=>{
    return {
        type : GET_LOADING
    }
}
export const getSuccess = (data)=>{
    return {
        type : GET_SUCCESS,
        payload : data
    }
}
export const getError = (err)=>{
    return{
        type : GET_ERROR,
        payload : err
    }
}