import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath : "path",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3002/todo"}), 
    endpoints : (builder) =>({
        getTodosById : builder.query({
            query : (id) => `users/${id}`
        })
        // deleteTodo : 
    })
})

export const {getTodosById} = todosApi