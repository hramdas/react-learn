
function List({ title, arr}){
    return(
        < >
            <h1>{title}</h1>
            <ul>
               { arr.map((e) => (
                   <li>{e}</li>
                    ))}
            </ul>
        </>
    )
}

export default List