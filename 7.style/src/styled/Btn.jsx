import styled from 'styled-components';

export const Btn = styled.button`
color : ${(props)=>(props.theme === "light" ? "#FEECE9" : "black")};
    background-color : ${(props)=>(props.theme === "light" ? "black" : "#FEECE9")};
    border : none;
    border-radius:10px 2px 10px;
    padding:10px 20px;
    font-weight : 500;
    font-size : 20px;
`;

export const Div = styled.div`
    display:flex;
    justify-content : center;
    align-items: center;
    margin:30px auto;
    flex-direction:column;
     /* background-color : ${(props)=>(props.theme === "light" ? "black" : "#FEECE9")} */
    background-color:#FE7E6D;
    padding : 30px;
    border-radius : 50px 5px 50px;
    width : 400px;
    height : 400px
    & > h2:hover{
        color:#CCD1E4;
    }
`
export const Input = styled.input`
    padding : 5px 10px;
    margin : 5px auto;
    width : 200px;
    font-size:20px
`
export const Form = styled.form`
    /* display:grid;
    grid-template-columns: auto;
    grid-gap:5px */
`