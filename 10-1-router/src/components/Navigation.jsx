import { Link } from "react-router-dom"
import { useContext } from "react"
import styled from 'styled-components'
import { AuthContext } from "../contexts/AuthContext"

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    & div #link{
        font-size : 20px;
        margin : 20px;
    }
    & #title{
        text-decoration : none;
        color : black;
    }
`
export const Navigation = () => {
    const {token, handleToken} = useContext(AuthContext)
    const handleLogout = ()=>{
        handleToken()
    }
    return (
        <Div>
            <h2><Link id="title" to="/">React Routing</Link></h2>
            <Div >
                <Link id="link" to="/">Home</Link>
                {token?<Link id="link" to="/dashboard">Dashboard</Link>:<span></span>}
                {token?<Link id="link" to="/dashboard/settings">Settings</Link>:<span></span>}
                <Link onClick={handleLogout} id="link" to="/login">{token?"Logout":"Login"} </Link>
            </Div>
        </Div>
    )
}
