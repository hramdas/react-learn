
function GroceryList({item, getRemove}){

    return(
        <div id="item">
            <span>{item.title}</span>
            <button onClick={()=>getRemove(item.id)}>X</button>
        </div>
    )
}

export default GroceryList