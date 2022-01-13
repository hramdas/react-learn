import { createStore, combineReducers } from "redux";
import { Reducer as TodosReducer } from "../features/Todos/reducer";
import { Reducer as CounterReducer } from "../features/Counter/reducer";

const rootReducer = combineReducers({
    CounterState : CounterReducer,
    TodosState : TodosReducer
})

//funcion mi

//All reducers
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

console.log("Entire state", store.getState())
