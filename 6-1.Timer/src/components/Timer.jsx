import { useEffect, useState } from "react";

function Timer(props){
    let [time, setTime] = useState(props.initial)

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime((p)=>{
                if(p === props.end){
                    clearInterval(id)
                    return props.end
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