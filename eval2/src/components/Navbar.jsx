import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link id="navitem" to="/">Home</Link>
            <Link id="navitem" to="/login">Login</Link>
            <Link to="/post">Add new job</Link>

        </div>
    )
}
