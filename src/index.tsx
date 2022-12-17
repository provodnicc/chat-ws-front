import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home';
import './index.css'
import { SignInPage } from './pages/SignIn';
import { MessengerPage } from './pages/Messanger';
import { ChatPage } from './pages/Chat';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/sign-in',
    element: <SignInPage/>
  },
  {
    path: '/mess',
    element: <MessengerPage/>
  },
  {
    path: '/chat/:id',
    element: <ChatPage/>
  }

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);