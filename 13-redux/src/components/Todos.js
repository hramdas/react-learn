import { useState, useEffect } from "react";
import { addSuccess, addError, addLoading, getSuccess, getError, getLoading } from "../stores/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Todos = ()=>{
   const [text, setText] = useState("");
   const {loading, todos, error} = useSelector((state)=>({
       loading : state.loading,
       todos : state.todos,
       error : state.error
    }))
   const dispatch = useDispatch()

   useEffect(()=>{
    getTodos()
   },[])

   async function getTodos(){
        try{
            dispatch(getLoading())
            fetch("http://localhost:3001/todos")
            .then(req=>req.json())
            .then(res=>{
                dispatch(getSuccess(res))
            })
        } catch(err){
            dispatch(addError(err))
        }
    }


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
        .then((res)=>{
            dispatch(addSuccess(res))
            getTodos()
        }
        )
        .catch((err)=>dispatch(addError(err)))
   }
   //{getLoading? }

   return(
       loading ? <div>Loading....</div> : error ? <div>something went wrong</div> :
       <div>
           <input value={text} type="text" placeholder="Enter Todo" onChange={(e)=>{
               setText(e.target.value)
           }} />
           <button onClick={()=>handleClick()} >ADD TODO</button>
           <div>
               {todos.map((e)=><div key={e.id}>{e.title}</div>)}
           </div>
       </div>
   )
}