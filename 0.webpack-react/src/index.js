import { add, mult } from "./calc.js";
import("./index.css")
import React from "react"
import ReactDom from "react-dom"

// var a= 4;
// var b= 4;

// console.log( add(2, 3))
// console.log( mult(1, 3))

// const h1 = document.createElement('h1');
// h1.innerText = "Hello webpack";
// h1.classList.add("redcolor")

// document.getElementById("root").appendChild(h1)

ReactDom.render(
   
    React.createElement("h1", {className : "redcolor"}, "Hello world"),
    document.getElementById("root")
)

ReactDom.render(
   
    React.createElement("i", {className : "redcolor"}, "Hello world"),
    document.getElementById("h1")
)
