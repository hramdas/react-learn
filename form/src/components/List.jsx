

const List = ({getdata}) =>{
    // const handleData = ()=>{
    //     console.log(getdata)
    // }
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Married</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {getdata.map((item)=>
                (
                    <tr key={item.id}>
                        <td id="name" >{item.name}</td>
                        <td>{item.age}</td>
                        <td id="add">{item.address}</td>
                        <td>{item.department}</td>
                        <td>{item.salary}</td>
                        <td>{item.isMarried === true ? "Married" : "Single"}</td>
                        <td id="img" ><img src={item.photo} alt="itemimg" /> </td>
                    </tr>
                    )
                )}
            </tbody>
        </ table>
    )
}

export default List