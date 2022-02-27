
function Button({name, val}){
    const handleChange = (val)=>{
      setCount(count + val)
    }
    return (
      <button oncli >{name}</button>
    )
}

export default Button