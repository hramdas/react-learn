import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext'
import {useContext } from 'react';

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    margin : auto 10px;
    &  button{
        margin-top : 20px;
        font-size : 20px;
        background : teal;
        color : white;
        padding : 2px 10px;
    }
`

export const Navbar = ()=>{
    const {token, handleToken} = useContext(AuthContext)
    return(
        <Div>
            <h2>AuthContext</h2>
            <div>
                <button onClick={handleToken}>{token?"Logout" : "Login" }</button>
            </div>
            
        </Div>
    )
}