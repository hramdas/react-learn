import { useParams } from "react-router-dom"

export const Products = () =>{
    const {id} = useParams()
    console.log(id)
    return(
        <>
        <h2>Products Page : {id}</h2>
        </>
    )
}