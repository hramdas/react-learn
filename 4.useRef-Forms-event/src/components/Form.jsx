import {useState, useRef} from 'react'

// form inputs

function Form(){
    const [form, setForm] = useState({
        username : "",
        age : ""
    })

    const ref = useRef(null)  //for file upload

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form, [name] : value
        })
        console.log(ref)
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log('submit', form)
    }
    return (
        <form onSubmit={handlesubmit}>
        <input onChange={handleChange} name="username" type="text" placeholder='Enter name' />
        <input onChange={handleChange}  name="age" type="number" placeholder='Enter number' />

        <inpu onChange={handleChange} ref="ref" type="file" />

        <input type="submit" />
        
        </form>
    )
}

export default Form