import { createContext, useState } from "react";

export const AuthContext = createContext({user : {}, handleLogin : ()=>{}});
export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState()

    const handleLogin = (user)=>{ 
        setUser(user)
    }

    const value = {user, handleLogin}
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}