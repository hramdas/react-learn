import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () =>{
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    const handleChange = ({target : {name, value}}) =>{
        setForm({...form, [name] : value})
    }
    const handleClick = ()=>{
        navigate(-1)
    }
    return(
        <div>
        <h2>Login</h2>
        <input name="email" onChange={handleChange} type="text" placeholder="Email" />
        <br />
        <input name="password" onChange={handleChange} type="text" placeholder="Passowrd" />
        <br />
        <button onClick={handleClick}>Login</button>
        </ div>
    )
}