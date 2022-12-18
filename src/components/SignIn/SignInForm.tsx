import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import userStore from "../../storage/userStore";
import './signinForm.css'


export const SignInForm = observer(()=>{
    const [uname, setUname] = useState('')
    const [pass, setPass] = useState('')
    

    const sendDataHandler = () => {
        console.log(uname)
        userStore.init(uname)
        
        window.location.replace('/')
        
        // fetch('http://localhost:5000')
    }

    return (<div className="container">
    <div className='input'>
        <input type='email' value={uname} onChange={(e)=>setUname(e.target.value)}/>
    </div>
        {/* <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/> */}
        <div className='btn' onClick={sendDataHandler}>Вход</div>
    </div>)
})