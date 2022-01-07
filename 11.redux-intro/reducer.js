const reducer = (state, {type, payload}) =>{   //check type and decide command
        switch(type){
            case "INC_COUNT" :
                return {...state, count : state.count + payload};
            case "DEC_COUNT" :
                return {...state, count : state.count - payload};
    
            default :
                return state;
        }
    };