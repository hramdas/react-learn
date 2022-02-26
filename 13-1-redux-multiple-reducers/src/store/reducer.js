import { ADD_TODO, GET_TODO } from "./actionTypes";

const init = [];

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case GET_TODO:
      return payload;
    default:
      return state;
  }
};
