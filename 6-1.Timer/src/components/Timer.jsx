import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color:#77D970;
    color : #ce0764;
    font-size:23px;
    font-weight : 600;
    margin : 10px;
    border : none;
    padding : 5px 16px;
    border-radius : 10px;
`
const H1 = styled.h1`
    background-color:#FF5151;
    width:200px;
    color: #FFF5FD;
    /* display:flex; */
    /* justify-content:center; */
    /* align-items:center; */
    margin : 10px auto auto;
`

function Timer({data}){
    const start = +data.start
    const end = +data.end
    let [time, setTime] = useState(start)

    useEffect(()=>{
         var id = setInterval(()=>{
            setTime((p)=>{
                if(p === end){
                    clearInterval(id)
                    return end
                }
                return p+1
            })
        }, 1000)

        //To stop memory leak
        // return ()=>{
        //     // console.log('unmounted')
        //     clearInterval(id)
        // };

    }, [])

    function handleStop(id){
        clearInterval(id)
        setTime((p)=>p
        )
        console.log(id)
    }
    
    return(
        <>
            <H1>Timer : {time}</H1>

            <button onClick={handleStop}>Stop</button>

            <Button onClick={()=>setTime(start)}>Restart</Button>
        </>
    )
}
export default Timer