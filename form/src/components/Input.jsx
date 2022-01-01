import { useState, useRef } from "react"

function Input( {postData}){
    const [input, setInput] = useState({})

    const fileRef = useRef(null)
    // let fileUrl = URL.createObjectURL(fileRef.current.files[0])

    const handleChange = (e)=>{
        let {name, value, checked, type} = e.target;
        value = type === "checkbox" ? checked : value;
        value = type === "file" ? URL.createObjectURL(fileRef.current.files[0]) : value;
        setInput({
            ...input,
            [name] : value
        })
    }

    const submitForm = (e)=>{       
        e.preventDefault()
        postData(input)
        // console.log(input)
    }

    return(
        <>
        <form className="form" onSubmit={submitForm}>
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
        </>
    )
}

export default Input