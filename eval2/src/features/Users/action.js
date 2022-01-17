import {ADD_USER, GET_USER, USER_LOGIN} from './actionTypes'

export const userLogin = (data)=>{
    return{
        type:USER_LOGIN,
        payload : data
    }
}