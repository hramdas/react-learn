import { useState } from "react";
import styled from "styled-components";

const Formcss = styled.form`
    padding : 10px;

    & > input{
        padding : 5px;
        font-size : 20px;
        margin-top : 5px;
    }
    & > #btn{
        margin-top : 10px;
        padding : 5px 25px;
        background-color : #1C6DD0;
        color : #FFF8F3;
    }
`

function Form({postData}){
    const [text, setText] = useState({})
    const handleChange = (e)=>{
        const {name, value} = e.target
        setText({...text, [name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        postData(text)
        // console.log(text)
    }

    return(
        <Formcss id="form" onSubmit={handleSubmit}>
            <input name="title" placeholder="Enter Title" onChange={handleChange} type="text" />
            <br/>
            <input name="ingredients" placeholder="Ingredients" onChange={handleChange} type="text" />
            <br/>
            <input name="time" placeholder="Time to cook" onChange={handleChange} type="text" />
            <br/>
            <input name="image" placeholder="Image url" onChange={handleChange} type="text" />
            <br/>
            <input name="instructions" placeholder="Instructions" onChange={handleChange} type="text" />
            <br/>
            <input  id="btn" type="submit"/>
        </Formcss>
    )
}


export default Form