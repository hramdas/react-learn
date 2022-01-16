- Action : What to do? pure object
- Reducer : How to do? take current state and action, and return new state
- Store : Object which holds the state of aplication. It brings together state, actions and reducers. Only single store in Redux app. Store has single root reducer.
  functions associated with store : createStore() & dispatch(action)

Changes made with pure function

## Redux setup File Structure;

- index.js

```ruby
import {Provider} from 'react-redux'
import {store} from ''

    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>

```

- store/sctionTypes.js   //not compolsary
```ruby
    export const ADD_SUCCESS = "ADD_SUCCESS"
    export const ADD_LOADING = "ADD_LOADING"
    export const ADD_ERROR = "ADD_ERROR"
```

- store/action.js  //What to do?
```ruby
    import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR} from "./actionTypes";
    export const addLoading = ()=>{
        return {
            type : ADD_LOADING
        }
    }
    export const addSuccess = (data)=>{
        return {
            type : ADD_SUCCESS,
            payload : data,
        }
    }
```
- store/reducer.js  //How to do? take current state and action, and return new state
```ruby
    import { ADD_SUCCESS, ADD_LOADING, ADD_ERROR} from "./actionTypes";

    const init = {loading : false, todos : [], error : false}
    export const Reducer = (state = init, {type, payload}) =>{
        switch(type){
            case ADD_LOADING:
                return{
                    ...state,
                    loading : true
                };
            case ADD_SUCCESS:
                return{
                    ...state,
                    todos : [...state.todos, payload],   //adding payload to state
                    loading : false
                };
            case ADD_ERROR:
                return{
                    ...state,
                    loading : false,
                    error : true
                };
            default:
                return state;
        }
    }
```

- store/store.js
```ruby
    import { createStore } from "redux";
    import { Reducer } from "./reducer";
    export const store = createStore(Reducer)
```
- to use redux dev tool
```ruby
    export const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
```

## Redux state use with components

```ruxy
import { addSuccess, addError, addLoading } from "../stores/action";
import { useSelector, useDispatch } from "react-redux";

 const {loading, todos, error} = useSelector((state)=>({  //initial state
       loading : state.loading,
       todos : state.todos,
       error : state.error
    }))
    const dispatch = useDispatch()
     async function getTodos(){
        try{
            dispatch(getLoading())
            fetch("http://localhost:3001/todos")
            .then(req=>req.json())
            .then(res=>{
                dispatch(getSuccess(res))  //to redux state
            })
        } catch(err){
            dispatch(addError(err))
        }
    }

```