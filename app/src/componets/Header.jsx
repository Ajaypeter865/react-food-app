import { useState } from "react"


const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState('Login')
  // let btnName = 'Login'


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
            <button className="login-btn" onClick={() => {btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')}}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    </div>
  )

}


export default Header