import { ADD_JOB , GET_JOB} from "./actionType";

const init = {jobs : [], error : false}
export const Reducer = (state = init, {type, payload})=>{
    switch(type){
        case ADD_JOB:
            return {
                ...state,
                jobs : [...state, payload]
            }
        case GET_JOB:
            return {
                ...state,
                jobs : payload
            }
        default :
            return
    }
    
}