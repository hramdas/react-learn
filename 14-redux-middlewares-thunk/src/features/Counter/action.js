import {INC_COUNT, DEC_COUNT} from './actionTypes'

export const addCounter = (count)=>{
    return {
        type : INC_COUNT,
        payload : count
    }
}

export const decCount = (count)=>{
    return {
        type : DEC_COUNT,
        payload : count
    }
}