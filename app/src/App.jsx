import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="/logo.png" alt="My Logo" />
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  )

}

const ResturantCard = () => {
  return (
    <div className='res-card'>
      <h3>Megna foods</h3>
    </div>
  )
}


const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>

        <ResturantCard />
      </div>

    </div>
  )

}




const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />

    </div>
  )
}

export default App
