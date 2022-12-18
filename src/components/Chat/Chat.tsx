import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io, { Socket } from 'socket.io-client'
import userStore from '../../storage/userStore'
import './chat.css'


export const Chat = observer(() => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<any>([])
    const [message, setMessage] = useState('')
    localStorage.setItem('token', 'assas')
    let flag = true
    const id = useParams().id
    const user = userStore
    useEffect(()=>{
        if(flag){
            const ws = io('http://localhost:9000')
            setSocket(ws)
            connRoom(ws)

            flag = false
        }
        return ()=>{
            socket?.emit('leave', JSON.stringify({
                room_id: id
            }))
        }
    }, [])

    const connRoom = (ws: any)=>{
        setMessages([])
        ws?.emit('connection', JSON.stringify({
            room_id: id
        }))
        console.log('conn')
    }


    const listener = (msg: any)=>{
        console.log(msg)
        setMessages(msg)
    }

    useEffect(()=>{
        socket?.on('messanger', listener)
    },[listener])

    const connListener = (msg: string)=>{
        console.log(msg)
        socket?.auth 
    }

    

    useEffect(()=>{
        socket?.on('connection', () => {
            socket!.auth = (cb)=>{
                cb({token: localStorage.getItem('token')})
            }
            socket.connect()
        })
    },[connListener])


    const send = ()=>{
        console.log(user)
        socket?.emit('setMessage', JSON.stringify({
            chat_id: id,
            uname: user.uname,
            message: message
        }))
    }

    return (<div className='content'>
        <div className='messanges'>
            {messages? messages.map((message: any, id: number)=>{
                return (
                    <div key={id}>
                        <div>
                            user: {message.uname}
                        </div>
                        <div>
                            message: {message.message}
                        </div><br/>
                    </div>
                )
            }): null}
        </div>
        
        <div className='inputBlock'>
                <input value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={send}>send</button>
        </div>
    </div>)
})