import {useState, useRef} from 'react'
import List from './List'

function Form(){
    const [form, setForm] = useState({
        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        isMarried : "",
        photo : ""
    })

    const fileRef = useRef()
    const handleChange = (e)=>{
        let {name, value, checked, type} = e.target;
        value = type === "checkbox" ? checked : value;
        value = type === "file" ? fileRef.current.files[0].name : value;

        setForm({
            ...form, [name] : value
        })
    }
    async function handleSubmit (e){

        e.preventDefault()

        fetch("http://localhost:3001/forms",{
            "method" : "POST",
            "headers" : {
                "content-type" : "application/json"
            },
            "body": JSON.stringify(form)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert("Form submites");
        })

        // console.log(form, fileRef.current.files[0])
    }

    return(
        <div>
  

        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" type="text" placeholder="Enter Name" required/>
            <input onChange={handleChange} name="age" type="number" placeholder="Enter age" required/>
            <input onChange={handleChange} name="address" type="text" placeholder="Enter address" required/>

            <select onChange={handleChange} name="department" required>
                <option  defaultValue>Select department</option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Finance ">Finance </option>
                <option value="Operations">Operations</option>
                <option value="Sales ">Sales </option>
            </select>

            <input onChange={handleChange} name="salary" type="number" placeholder="Enter salary" required/>
            <label>
                Married 
                <input onChange={handleChange} name="isMarried" type="checkbox" value="isMarried" />
            </label>
            <input ref={fileRef} id="file" onChange={handleChange} name="photo" type="file" placeholder="Photo" required/>
            <input id="submit" type="submit" />
        </form>

        <List />

                  
        </div>
    )
}

export default Form