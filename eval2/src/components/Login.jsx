import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const [text, setText] = useState();
    
    const handleChange = (e)=>{
        let {name, value} = e.target;
        setText({...text, [name] : value})
    }
    const {user, handleLogin} = useContext(AuthContext)

    const handleSubmit = ()=>{
        fetch(`http://localhost:3001/users/?email=${text.email}&password=${text.password}`)
        .then((req)=>req.json())
        .then((res)=>{
            handleLogin(res[0])
            navigate(-1)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    if(user) {
        return <div>
            <h1>Your not alowed to do this</h1>

            <Navigate to="/">Jobs</Navigate>
            </div>
    }


    return (
        <div>
            <input type="text" onChange={handleChange} name="email" placeholder="Email" />
            <br />
            <input type="text" onChange={handleChange} name="password" placeholder="Password" />
            <br />

            <button onClick={()=>handleSubmit()} >Login</button>
        </div>
    )
}
