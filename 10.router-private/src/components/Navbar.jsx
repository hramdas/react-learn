import { Link } from "react-router-dom"

export const Navbar = () =>{
    const style = {
        "display" : "flex",
        "justifyContent": "space-evenly",
        "margin" : " 10px auto",
        "width" : "500px",
        "padding" : "10px",
        "textDecoration" : "none",
        "backgroundColor" : "coral"
    }
    return(
        <div style={style}>
       <Link to="/" >Home</Link>
       <Link to='/about'  >About</Link>
       <Link to='/contact' >Contact</Link>
       <Link to='/userlist' >Users List</Link>
       <Link to='/login' >Login</Link>
        </ div>
    )
}