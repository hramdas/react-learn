import { INC_COUNT } from "./actionTypes";
const initState = {
    count : 1
}
export const Reducer = (state = initState, {type, payload}) =>{
    switch(type){
        case INC_COUNT:{
            return{
                ...state,
                count : state.count + payload
            }
        }
        default :
        return state;
    }
}