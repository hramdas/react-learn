import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name : "todos",
    initialState : {todos : []},
    reducers : {
        addTodo : (state, payload) =>{
            state.todos.push(payload)
        }
    }
})

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;