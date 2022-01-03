import styled from "styled-components";

const Div = styled.div`

display : grid;
grid-template-columns: 50% 45%;

&  img{
    width : 400px;
}
& #info{
    text-align: left;
    margin-top :  80px;
}

`
function Single({item}){
console.log(item)
    return(
        <>
            {<Div id="single">
                <span>
                    <h2>{item.title}</ h2>
                    <img src={item.image} alt="recipeimg" />
                </span>
                <span id="info">
                    <b>Time : {item.time} minutes</b>
                    <p> <b>Ingredients :</b> {item.ingredients}</p>
                    <p>{item.instructions}</p>
                </span> 
            </Div>
            }

            {/* {
                if(item){
                    <Div id="single">
                    <span>
                        <h2>{item.title}</ h2>
                        <img src={item.image} alt="recipeimg" />
                    </span>
                    <span id="info">
                        <b>Time : {item.time} minutes</b>
                        <p> <b>Ingredients :</b> {item.ingredients}</p>
                        <p>{item.instructions}</p>
                    </span> 
                </Div>
                } */}
        </>
    )
}

export default Single