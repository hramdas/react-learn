import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
   const [token, setToken] = useState();
   const handleLogin = (user)=>{
       fetch('https://reqres.in/api/login',{
           method : "POST",
           headers : {
               "content-type" : "application/json"
           },
           body : JSON.stringify(user)
       })
       .then(req=> req.json())
       .then((res)=>{
           setToken(res)
           console.log(res)
       })
   }

   const handleToken = ()=>{
       setToken()
   }
   const value = {token, handleLogin, handleToken}
    return <AuthContext.Provider value = {value} >
        {children}
    </AuthContext.Provider>
}