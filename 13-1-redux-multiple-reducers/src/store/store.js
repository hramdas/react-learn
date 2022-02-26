import { combineReducers, createStore } from "redux";
import { Reducer as TodoReducer } from "./reducer";

const rootReducer = combineReducers({ TodoReducer });
export const store = createStore(rootReducer);

console.log("GetState", store.getState());
