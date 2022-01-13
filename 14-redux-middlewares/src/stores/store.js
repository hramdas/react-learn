import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Reducer as TodosReducer } from "../features/Todos/reducer";
import { Reducer as CounterReducer } from "../features/Counter/reducer";

const rootReducer = combineReducers({
    CounterState : CounterReducer,
    TodosState : TodosReducer
})

//funcion middleware(req, res, next)

// function logger(store){
//     return function(next){
//         return function(action){
//         }
//     }
// }

const logger1 = (store)=>(next)=>(action)=>{
    if(typeof action === 'function'){
        return action(store.dispatch)
    }
    next(action)
}

// const logger2 = (store)=>(next)=>(action)=>{
//     //console.log('logger2', action)
//     //console.time('p2')

//     next(action)
//     //console.log('logger existing 2')
//    // console.timeEnd('p2')
// }

//All reducers
export const store = createStore(rootReducer,
    compose( applyMiddleware(logger1) , window.__REDUX_DEVTOOLS_EXTENSION__())   
    

 //
)

//console.log("Entire state", store.getState())
