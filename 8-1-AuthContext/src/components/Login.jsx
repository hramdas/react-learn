import {AuthContext} from '../contexts/AuthContext'
import { useState, useContext } from 'react';

export const Login = ()=>{
    const [user, setuser] = useState({});
    const handleChange = (e)=>{
        let {name, value} = e.target;
        setuser({
            ...user, [name] : value
        })
    }
const {handleLogin, token} = useContext(AuthContext)
    const handleClick = (e)=>{
        e.preventDefault()
        handleLogin(user.email, user.password)
    }
    if(token){
        return(
            <div>
                <h1>Logged in Successfully</h1>
                <h2>Token : {token.token}</h2>
            </div>
        )
    }
  
    return(
        <div>
            <h1>User</h1>
            <form onSubmit={handleClick}>
                <input placehonder="Email" name="email" type="email" onChange={handleChange} />
                <br/>
                <input placehonder="Password" type="text" name="password" onChange={handleChange} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}
