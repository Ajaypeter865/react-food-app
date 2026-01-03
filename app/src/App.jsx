import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './componets/Header'
import Body from './componets/Body'
import About from './componets/About'
import Contact from './componets/Contact'
import Error from './componets/Error'

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement : <Error/>,


    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  }
])


const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App
