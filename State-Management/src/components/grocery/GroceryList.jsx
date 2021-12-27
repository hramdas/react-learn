
function GroceryList({item, getRemove}){

    return(
        <>
            <p>{item.title}</p>
            <button onClick={()=>getRemove(item.id)}>Remove</button>
        </>
    )
}

export default GroceryList