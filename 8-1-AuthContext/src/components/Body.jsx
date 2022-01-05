import { useContext } from 'react'
import { CartContext } from "../contexts/CartContext"

export const Body = ()=>{
    const { handleCartUpdate} = useContext(CartContext)
    // const handleButton = (value)=>{
    //    value+=1
    // }
    
    return(
        <>
        <button onClick={()=>handleCartUpdate(1)}>Click</button>
        </>
    )
}