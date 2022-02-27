import {useState} from 'react'
 const Filter = () =>{
     const [val, setVal] = useState("")

     const handleChange = (e)=>{
         setVal(e.target.value)
     }
    return(
        <div id="sort">
        <h2>Sort</h2>
        <select onChange={handleChange} name="department" required>
                 <option  defaultValue>By Department</option>
                 <option value="Marketing">Marketing</option>
                 <option value="Human Resource">Human Resource</option>
                 <option value="Finance ">Finance </option>
                 <option value="Operations">Operations</option>
                 <option value="Sales ">Sales </option>
        </select>
        </div>
    )
}

export default Filter