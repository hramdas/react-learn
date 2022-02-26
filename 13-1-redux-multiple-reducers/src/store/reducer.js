import { ADD_TODO } from "./actionTypes";

const init = [];

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];

    default:
      return state;
  }
};
