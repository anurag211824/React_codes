import React from 'react'
import logo from '../images/logo.png';

const Navigation = () => {
  return (
   <nav>
    <div className='logo'>
        <img src={logo} alt="do some coding" />
    </div>

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   </nav>
  )
}

export default Navigation