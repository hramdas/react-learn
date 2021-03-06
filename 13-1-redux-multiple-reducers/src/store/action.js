import { todos } from "../utils/request";
import { ADD_TODO, GET_TODO } from "./actionTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const getTodo = (data) => {
  return {
    type: GET_TODO,
    payload: data,
  };
};

export const getData = async (dispatch) => {
  const { data } = await todos.get("/");
  dispatch(getTodo(data));
};
