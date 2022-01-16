import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR, GET_SUCCESS, GET_LOADING, GET_ERROR } from "./actionTypes";

const init = {loading : false, todos : [], error : false}

export const Reducer = (state = init, {type, payload}) =>{
    switch(type){
        case ADD_LOADING:
            return{
                ...state,
                loading : true
            };
        case ADD_SUCCESS:
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
        case GET_LOADING:
            return{
                ...state,
                loading : true
            };
        case GET_SUCCESS:
            return{
                ...state,
                todos : payload,
                loading : false
            };
        case GET_ERROR:
            return{
                ...state,
                loading : false,
                error : true
            };
        default:
            return state;
    }
}

