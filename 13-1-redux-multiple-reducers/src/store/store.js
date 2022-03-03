import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Reducer as TodoReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ TodoReducer });
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

console.log("GetState", store.getState());
