import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from 'react-uuid'
import './Messanger.css'

export const Messanger = () =>{
    const [chats, setChats] = useState<any[]>([])
    const createChat = ()=>{
        const id = uuid()
        const mess = <div className="chat">
            <Link  to={'/chat/'+id}>{id}</Link>
        </div>
        setChats([...chats, mess])
    }
    return (<div className="content">
        <div className="createBtn" onClick={createChat}>Create Chat</div>
        
        <div className="messanger">
            {chats.length? chats.map((block: any)=>{
                return block
            }): null}
        </div>
    </div>)
}