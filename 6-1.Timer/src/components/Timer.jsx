import { useEffect, useState } from "react";

function Timer(){
    let [time, setTime] = useState(0)

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime((p)=>{
                if(p===10){
                    clearInterval(id)
                    return 10
                }
                return p+1
            })
        }, 1000)

    }, [])
    return(
        <>
            <h1>Timer : {time}</h1>
        </>
    )
}

export default Timer