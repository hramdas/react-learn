import styled from "styled-components";

const Div = styled.div` 
    text-align: left;
    & > span{
        display : grid;
        grid-template-columns: 70% 20%;
        grid-gap 7%;
        border : 1px solid gray;
        margin-bottom : 5px;
        font-size : 15px;
        padding : 3px 10px;
        font-weight : 600;
    }
`
const Button = styled.button`
        height : 30px;
        width : 100px;
        background-color: #3E8E7E;
        color: white;
        margin : auto auto;
`

function List ({itemList, view}){
    const viewClick= (id)=>{
        view(id)
    }
return(
    <Div id="list">
        {itemList? itemList.map((item)=>(
            <span key={item.id}>
                <p>{item.title} : {item.time} minutes </p>
                <Button onClick={()=> viewClick(item.id)} >View</Button>
            </span>
        )) : <p>loading....</p>}

    </Div>
)
}

export default List