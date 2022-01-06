import { Link } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom"

export const UserPage = () =>{
    const [user, setUser] = useState()
    const {id} = useParams()

    function Userdata(){
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res)=>res.json())
        .then((result)=>{
            setUser(result.data)
        })
    }

    useEffect(()=>{
        Userdata()
    },[]) 

    // console.log(user)

    return(
        <div style={{margin:"20px"}}>
        <h2>User details</h2>
      
           {user && 
                <div> 
                    <p>Name: <b> {user.first_name +' ' + user.last_name}</b></p>
                    <p>Email: <b> {user.email}</b></p>
                    <img src={user.avatar} alt="avatarimg"/>
                </div>
            }

        </ div>
    )
}