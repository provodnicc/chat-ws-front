import React, { useState } from "react";
import { Chat } from "../components/Chat/Chat";
import { Header } from "../components/header/header";
import { SignInForm } from "../components/SignIn/SignInForm";

export const SignInPage = () => {
    const [showMess, setShowMess] = useState(false)

    return (<>
        <Header/>
        <SignInForm/>
    </>)
}