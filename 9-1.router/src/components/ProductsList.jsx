import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
export const ProductsList = () =>{
    const [list, setList] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then((req)=>req.json())
        .then((res)=>{
            setList(res)
        })
    }, []);

    if(!list) return <div>Loading.... </ div>
    return (
        <div id="items">
            <h1>Products List</h1>
            <div id="row">
                    <h2>Name</h2>
                    <h2>Price</h2>
                    <h2>More</h2>
                </div>
           {list.map((e)=>(
                <div id="row" key={e.id}>
                    <h3>{e.name}</h3>
                    <h3>{e.price}</h3>
                    <p>
                    <Link to={`/product/${e.id}`}>more details</Link>
                    </p>
                </div>
           ))}
        </div>
    )
}