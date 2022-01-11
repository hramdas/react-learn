import { useState } from "react";
import { addSuccess, addError, addLoading } from "../stores/action";
import { useSelector, useDispatch } from "react-redux";

export const Todos = ()=>{
   const [text, setText] = useState("");
   const todos = useSelector((state)=>state.todos)
   const dispatch = useDispatch()


   const handleClick = ()=>{
       dispatch(addLoading())
       fetch("http://localhost:3001/todos",{
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ status : false, title : text })
        })
        .then((req)=>req.json())
        .then((res)=>
            dispatch(addSuccess(res))
        )
        // .catch((err)=>dispatch(addError(err)))
   
   }

   return(
       <div>
           <input value={text} type="text" placeholder="Enter Todo" onChange={(e)=>{
               setText(e.target.value)
           }} />
           <button onClick={()=>handleClick()} >ADD TODO</button>
       </div>
   )
}