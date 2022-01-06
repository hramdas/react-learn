import { AuthContext } from "../contexts/AuthContext";
import {useContext} from 'react'
import { Navigate, Route } from "react-router-dom";


export const PrivateRoute = ({path, element}) =>{
    const {token} =  useContext(AuthContext);

    if(!token){
        return <Navigate to={"/login"} />
    }
    
}