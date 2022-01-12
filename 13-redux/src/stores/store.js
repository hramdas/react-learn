import { createStore, combineReducers } from "redux";
import { Reducer as TodosReducer } from "../features/Todos/reducer";
import { Reducer as CounterReducer } from "../features/Counter/reducer";

const rootReducer = combineReducers({
    CounterReducer : CounterReducer,
    TodosReducer : TodosReducer
})

export const store = createStore(rootReducer)

console.log("Entire state", store.getState())
