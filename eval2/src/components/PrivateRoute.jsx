import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
    if(!user){
        return <Navigate to={"./login"} />
    }
    return children
}

