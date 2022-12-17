import React, {useState} from 'react'
import { Header } from '../components/header/header'

export const HomePage = () => {
    const [showMess, setShowMess] = useState(false) 
    function showMessHandler(){
        setShowMess(!showMess)
    }
    return (<>
        <div >
            <Header/>
            
        </div>

    </>)
}