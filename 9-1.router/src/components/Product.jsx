import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export const Product = () =>{
    const {id} = useParams()
    const [product, setProduct] = useState()
    
    useEffect(() => {
       fetch(`http://localhost:3001/products/${id}`)
       .then( async (data)=>{
           if(data.ok){
               data = await data.json()
               setProduct(data)
           }
        })

       .catch((err)=>{
            // setProduct(err)
            console.log(err)
       })
    },[id])

    if(!product) return <div>Product does not exist</div>
    // if(product.length == 0)
    console.log(product)
    return (
            <div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
            </div>
    )
}