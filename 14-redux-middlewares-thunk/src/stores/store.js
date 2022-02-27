import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Reducer as TodosReducer } from "../features/Todos/reducer";
import { Reducer as CounterReducer } from "../features/Counter/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CounterState: CounterReducer,
  TodosState: TodosReducer,
});

// const logger1 = (store)=>(next)=>(action)=>{
//     if(typeof action === 'function'){
//         return action(store.dispatch)
//     }
//     next(action)
// }

//All reducers
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())

  //
);

//console.log("Entire state", store.getState())
