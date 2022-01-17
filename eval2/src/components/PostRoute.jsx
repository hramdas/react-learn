import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export const PostRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    // console.log(user.role)
    if(!user || user.role !== "admin" || user.role !== "company"){
        return <Navigate to={"/login"} />
    }
    return children
}
