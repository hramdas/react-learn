import axios from "axios";

export const todos = axios.create({
  baseURL: "http://localhost:3001/todos",
});
