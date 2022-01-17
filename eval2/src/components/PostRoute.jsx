import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export const PostRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(!user ){
        return <Navigate to={"/login"} />
    }
    if(user.role === "admin" || user.role === "company")  return children
    if(user.role !== "admin" || user.role !== "company"){
        return <Navigate to={"/login"} />
    }

}
