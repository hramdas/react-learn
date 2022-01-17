import {useState} from 'react'

export const Post = () => {
    const [form, setForm] = useState()

    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let data = JSON.stringify(form)
        fetch('http://localhost:3001/jobs',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify(form)
        })
        .then(req=>req.json())
        .then((res)=>{
            console.log(res)
        })
    }

    return (
       
        <div>
            <h2>Publish job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} />
                <br />
                <input type="number" name="salary" placeholder="salary" onChange={handleChange} />
                <br />
                <input type="text" name="location" placeholder="location" onChange={handleChange} /> <br />
                <input type="text" name="type" placeholder="Type" onChange={handleChange} /> <br />
                <input type="text" name="description " placeholder="Description " onChange={handleChange} /> <br />
               <input type="submit" />
            </form>
            
        </div>
    )
}
