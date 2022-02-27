import {useState} from 'react'
import {Btn, Div, Input, Form} from '../styled/Btn'
// import { Button } from '@mui/material';


function Style(){
    const [theme, setTheme] = useState('light')
   
    return(
        <>
        <Div>
            <h2>Headline</h2>
            <Form>
            <Input placeholder='Enter Name'/>
            <br/>
            <Input placeholder='Enter Email'/>
            <br/>
            <Input placeholder='Enter Password'/>
        </Form>
        
        <Btn theme = {theme} onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')} >Click here</Btn>

        </Div>

        <hr />
        
        </>
    )
}

export default Style