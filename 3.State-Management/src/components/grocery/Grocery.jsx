import React from "react";
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import {nanoid} from 'nanoid'
function Grocery (){
    const [list, setList] = React.useState([])

    const handleList = (item)=>{
        const payload = {
            title : item,
            status : false,
            id : nanoid(7)
        }
        setList([...list, payload])
    }

    const handleRemove=(id)=>{
        const updated = list.filter(e=>e.id !== id)
        setList(updated)
    }

    return(
         <>
            <GroceryInput getData={handleList}/>
            <div className="grocaryitems">
            {list.map((e)=> <GroceryList getRemove={handleRemove} key={e.id} item={e}/> )}
            </div>
           
            
         </>
     ) 
}

export default Grocery