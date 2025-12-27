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


export default Header