import {ADD_TODO, ADD_COUNTER, ADD_TODO_LOADING,  ADD_TODO_SUCCESS, GET_TODO_SUCCESS} from './actionTypes'

const init = {loading : false, todos : [], error : false};
// export const reducer = (state: init, {type, payload}) =>{

export const reducer = (state = init, {type, payload}) =>{
    switch(type){
        case ADD_TODO:
            return{
                ...state,
                todos : [ ...state.todos, payload]
            };
        case ADD_TODO_LOADING:
            return{
                ...state,
               loading : true
            };
        case ADD_TODO_SUCCESS:
            return{
                ...state,
               todos : [ ...state.todos, payload],
               loading : false
            };
        case GET_TODO_SUCCESS:
            return{
                ...state,
               todos :  payload,
               loading : false
            };

        case ADD_COUNTER:
            return{
                ...state,
                counter : [ ...state.todos, payload]
            };
        default:
            return state;
    }
}
