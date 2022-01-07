// const action = {type : "",  payload : ""};  //Fixed   //payload optional
// const decCountAction = {type : "DEC_COUNT",  payload : 1};

import {createStore} from 'redux';
import { reducer } from './reducer.js';


// class Store {
//     constructor(reducer, init){
//         this.reducer = reducer;
//         this.state = init
//     }
//     getState(){
//         return this.state
//     }
//     dispatch(action){   //calls reducer
//         this.state = this.reducer(this.state, action);
//     };
// }


//pure function 
//Fixed
// const reducer = (state, {type, payload}) =>{   //check type and decide command
//     switch(type){
//         case "INC_COUNT" :
//             return {...state, count : state.count + payload};
//         case "DEC_COUNT" :
//             return {...state, count : state.count - payload};

//         default :
//             return state;
//     }
// };

const init = { count : 1}

const store = new createStore(reducer, init);  // Fixed
console.log(store.getState())

store.dispatch({type : "INC_COUNT", payload : 1})

console.log(store.getState())

