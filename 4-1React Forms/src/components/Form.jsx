// import {useState, useRef} from 'react'
// import List from './Table'
// import FormInput from './FormInput'

function Form(){

    // async function handleSubmit ({e, form}){

    //     fetch("http://localhost:3001/forms",{
    //         "method" : "POST",
    //         "headers" : {
    //             "content-type" : "application/json"
    //         },
    //         "body": JSON.stringify(form)
    //     })
    //     .then(res => res.json())
    //     .then(result => { 
    //         console.log(result)
    //         alert("Form submites");
    //         getData()
    //     })
    // }

    const getData = ()=>{
        fetch(`http://localhost:3001/forms`)
        .then(res => res.json())
        .then(result => {
           return result
        })
    }
    getData()

    return(
        <div>
            {/* <Form data={getData} />       
            <FormInput getSubmit={handleSubmit} /> */}

        </div>
    )
}

export default Form