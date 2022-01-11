import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR } from "./actionTypes";

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