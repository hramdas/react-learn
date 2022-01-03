import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Single from "./Single";

import styled from "styled-components";

const Div = styled.div`
    display : grid;
    grid-template-columns: 40% 40%;
    margin: auto 50px;
    align-items:center;
    background-color: #d1d1d1ad;
`

function Recipe(){
    let [recipeData, setRecipe] = useState()
    // const [single, setSingle] = useState()
    const [singleItem, setSingleItem] = useState(1)

    const handleForm = (text) =>{
        fetch('http://localhost:3001/recipe',{
            "method" : "POST",
            "headers" : {
                "content-type" : "application/json"
            },
            "body" : JSON.stringify(text)
        })
        .then(res=> res.json())
        .then(result=>{
            console.log(result)
        })
        // recipeItems()
    }
    async function  recipeItems(){
        await fetch('http://localhost:3001/recipe')
        .then(res=>res.json())
        .then(result=>{
            setRecipe(result)
            console.log(result)
        })
    }
    useEffect(() => {
        recipeItems()
    }, []);

    useEffect(() => {
        Item()
    }, []);


    async function  Item(id){
        await fetch(`http://localhost:3001/recipe/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setSingleItem(result)
            
        })
    }

    return(
      <>
      <Div id="top">
        <Form postData = {handleForm} />
        <List itemList = {recipeData} view={Item} />
      </Div>
      <Single item={singleItem} />
      </>
    )
}

export default Recipe