import {useState} from 'react'
import {Button, Div, Input, Form} from '../styled/Button'
import { Button } from '@mui/material';


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