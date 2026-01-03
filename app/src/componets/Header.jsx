import { useState } from "react"
import { Link } from "react-router-dom"


const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState('Login')
  // let btnName = 'Login'


  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="/logo.png" alt="My Logo" />
        <div className='nav-items'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'> Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => { btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login') }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    </div>
  )

}


export default Header