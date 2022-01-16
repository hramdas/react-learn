
export const Input = () => {
    const handleChange = (e)=>{
        
    }
    return (
        <div>
            <input onChange={()=>handleChange()} type="text" placeholder="Enter Todo" />
            <button>Add todo</button>
        </div>
    )
}

