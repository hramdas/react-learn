import { useContext, useState } from "react"
import {AuthContext} from '../contexts/AuthContext'

export const Login = () => {
    const [user, setuser] = useState({});
    const {token, handleLogin} = useContext(AuthContext)
    const handleChange = (e)=>{
        const {name, value} = e.target
        setuser({...user, [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogin(user)
    }

    if(token){
        return <div>
             <h1>Login Successful</h1>
             <h3>Token : {token.token}</h3>
        </div>
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" onChange={handleChange} />
            <br />
            <input type="text" name="password" placeholder="Password" onChange={handleChange} />
            <br />
            <input type="submit" />
            </form>
        </div>
    )
}

