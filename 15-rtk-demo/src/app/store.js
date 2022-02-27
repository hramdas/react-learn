import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { todosApi } from '../features/todos/TodosService';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApi.reducerPath] : todosApi.reducer
  },
});
