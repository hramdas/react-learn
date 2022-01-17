import { USER_LOGIN } from "./actionType";

const init = {users : []}
export const UserReducer = (state = init, {type, payload})=>{
    switch(type){
        case USER_LOGIN:
            return {
                ...state,
                jobs : [...state, payload]
            }
        default :
            return
    }
    
}