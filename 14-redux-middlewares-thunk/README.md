actions, action creators, reducer

1
## Counter :
    /actions.js
    /actionTypes.js
    /reducer.js
    
## Todos :
    /actions.js
    /actionTypes.js
    /reducer.js

2.
## Actions :
    CounterAction.js
    TodoAction.js
## ActionTypes :
    CounterActionType.js
    
    
## Store
  export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)
);
