import { createStore, combineReducers, applyMiddleware } from "redux";
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
    //console.log('logger1')
    //console.time('p1')
    next(action)   //call logger2
    //console.log('logger existing 1')
    //console.timeEnd('p1')
}
const logger2 = (store)=>(next)=>(action)=>{
    //console.log('logger2', action)
    //console.time('p2')

    next(action)
    //console.log('logger existing 2')
   // console.timeEnd('p2')
}

//All reducers
export const store = createStore(rootReducer,
    applyMiddleware(logger1, logger2)

 //window.__REDUX_DEVTOOLS_EXTENSION__()
)

//console.log("Entire state", store.getState())
