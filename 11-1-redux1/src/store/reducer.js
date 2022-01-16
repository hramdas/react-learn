//How to do

import { ADD_LOADING, ADD_TODO, ADD_ERROR, GET_LOADING, GET_TODO, GET_ERROR } from "./actionTypes";

const init = {loading : false, todos : [], error : false}
export const reducer = (state = init, {type, payload})=>{
    switch(type){
        case ADD_LOADING:
            return{
                ...state,
                loading : true
            };
        case ADD_TODO:
            return{
                ...state,
                todos : [...state.todos, payload],
                loading : false
            };
        case ADD_ERROR:
            return{
                ...state,
                loading : false,
                error : true
            };
        case GET_TODO:
            return{
                ...state,
                todos:payload,
                loading : false
            }
        default:
            return state;
    }
}