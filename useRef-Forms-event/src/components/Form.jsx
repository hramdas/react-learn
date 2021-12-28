import {useState} from 'react'

// useRef save data if Rerendered

function Form(){
    const [form, setForm] = useState({
        username : "",
        age : ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form, [name] : value
        })
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log('submit', form)
    }
    return (
        <form onSubmit={handlesubmit}>
        <input onChange={handleChange} name="username" type="text" placeholder='Enter name' />
        <input onChange={handleChange}  name="age" type="number" placeholder='Enter number' />

        <input type="submit" />
        
        </form>
    )
}

export default Form