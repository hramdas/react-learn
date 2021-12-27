import React from "react"

function GroceryInput({getData}){
    const [text, setText] = React.useState("")

    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleInput = ()=>{
        getData(text)
    }

    return(
        <>
            <input required onChange={handleChange} placeholder="Enter Item" type="text" />
            <button id="inputbtn" onClick={handleInput}>Add</button>
        </>
    )
}
export default GroceryInput