import {useContext} from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) =>{
    const {token} =  useContext(AuthContext);
    //if not loggedin show login page
    if(!token){
        return <Navigate to={"/login"} />
    }
    return children
}