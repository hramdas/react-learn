import { Children, createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({Children}) =>{
    return <AuthContext>
        {Children}
    </AuthContext>
}
