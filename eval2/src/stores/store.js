import { createStore, combineReducers } from "redux";
import { Reducer } from "../features/Jobs/jobReducer";

// const RootReducer = combineReducers({
//     JobState : JObReducer
// })
// export const store = createStore(RootReducer)
export const store =  createStore(Reducer)