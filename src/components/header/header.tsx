import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import './header.css'

interface HeaderProps{
    onClick?: ()=>void
}

export const Header: FC<HeaderProps> = ({onClick})=>{
    return (<div className='header'>
        <Link to={'/'}>
            Home
        </Link>

        <Link to={'/mess'}>
            Messenger
        </Link>
        <Link to={'/sign-in'} >
            Sign-In
        </Link>
    </div>)
}