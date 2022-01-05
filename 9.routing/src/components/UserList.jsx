import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const UserList = () =>{
    const [users, setUsers] = useState([])

    function getUser(){
        fetch('https://reqres.in/api/users')
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result)
            setUsers(result.data)
        })
    }
    useEffect(()=>{
        getUser()
    },[]) 

    return(
        <div>
        {
            users.map((e)=>(<h2 key={e.id}> <Link to={`/userpage/${e.id}`} >{e.first_name}</Link> </h2>))
        }
        </div>
    )
}