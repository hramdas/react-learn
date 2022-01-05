import {Cart} from './Cart'
import { ThemeContext } from "../contexts/Theme"
import { useContext } from "react"

export const Navbar = ()=>{
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <div>
           
            <p>Navbar</p>
            <h2> Theme is : {theme}</h2>
            <button
            onClick={()=>toggleTheme()}>Change Theme
            </button>
            <Cart />
        </div>
        
    )
}