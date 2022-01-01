import Input from './Input'
import List from './List'
import {useEffect, useState } from 'react'
 
function Form(){
    const [formData, setFormData] = useState([])
    // const [form, setForm] = useState([])

    const handleSubmit = (data) =>{
        // setForm(data)
        fetch("http://localhost:3001/forms",{
            "method" : "POST",
            "headers" : {
                "content-type" :"application/json"
            },
            "body" : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            handleGet()
        })
    }

    useEffect(() => {
        handleGet()
        // console.log('inside UseEffect', formData)
    }, [])
   
    const handleGet =()=>{
        fetch("http://localhost:3001/forms")
        .then(res=>res.json())
        .then(result => {
            setFormData(result)
        })
        console.log('formData', formData)
    }

    return(
        <>
         < List getdata = {formData} />
       < Input postData = {handleSubmit} />
      
        </>
    )
}

export default Form