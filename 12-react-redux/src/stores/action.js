import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR } from "./actiontypes";

export const addSuccess = (data)=>{
    return {
        type : ADD_SUCCESS,
        payload : data,
    }
}
export const addLoading = ()=>{
    return {
        type : ADD_LOADING
    }
}
export const addError = ()=>{
    return {
        type : ADD_ERROR
    }
}