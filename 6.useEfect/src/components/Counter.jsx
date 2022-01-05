import { useEffect, useState } from "react"

function Counter() {
    const [count, setCount] = useState(3)
    useEffect(()=>{
       const id = setInterval(()=>{ 

            setCount((p)=>{
                if(p === 0){
                    clearInterval(id)
                    return 0;
                } 
                 return p-1
            })
        }, 1000)

        return ()=>{
            console.log('unmounted')
            clearInterval(id)
        };

    },[])

    return(
        <>
        <h1>Counter : {count}</h1>

        {/* <button onClick={()=>setCount(count+1)}>Add 1</button> */}
        
        </>
    )
   }

   export default Counter