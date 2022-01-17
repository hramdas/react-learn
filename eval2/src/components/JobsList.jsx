import { getJob } from "../features/Jobs/action"
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'

export const JobsList = () => {
    const [list, setList] = useState()
    const state = useSelector((state)=>({
        state
    }))
   
    const dispatch = useDispatch()

    useEffect(() => {
    getJobs()
    }, [])

    const getJobs = ()=>{
        fetch('http://localhost:3001/jobs')
        .then(req=>req.json())
        .then((res)=>{
           setList(res)
            // dispatch(getJob(res))
        })
    }
    console.log(list)
    if(!list){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {/* <Navbar /> */}
            <h1>Jobs</h1>
            {list.map((job)=>(
                <div className="jobitem" key={job.id}>
                    <b>{job.title}</b>
                    <div>
                        <span><b>Salary :</b>  {job.salary}</span>
                        <span><b>Location :</b> {job.location}</span>
                        <span><b>Type :</b> {job.type}</span>
                    </div>
                    <p><b>Description : </b>{job.description}</p>
                </div>
            ))}
        </div>
    )
}
