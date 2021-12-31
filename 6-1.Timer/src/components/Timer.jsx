import { useEffect, useState } from "react";



function Timer({data}){
    const start = +data.start
    const end = +data.end
    let [time, setTime] = useState(start)

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime((p)=>{
                if(p === end){
                    clearInterval(id)
                    return end
                }
                return p+1
            })
        }, 1000)

        //To stop memory leak
        return ()=>{
            // console.log('unmounted')
            clearInterval(id)
        };
       
    }, [])

    const handleStop = (id)=>{
        clearInterval(id)
        setTime((p)=>p
        )
    }
    
    return(
        <>
            <h1>Timer : {time}</h1>

            {/* <button onClick={handleStop}>Stop</button> */}

            <button onClick={()=>setTime(start)}>Restart</button>
        </>
    )
}
export default Timer