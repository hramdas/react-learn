import { Link } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="navbar">
            <Link id="navitem" to="/">Home</Link>
            <Link id="navitem" to="/login">Login</Link>
            <Link to="/post">Add new job</Link>
        </div>
    )
}
