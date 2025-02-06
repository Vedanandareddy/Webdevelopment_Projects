import React from 'react'
import './Navbar.css'

const Navbar = ({bg}) => {
  return (
    <div className="nav {`${bg}`}">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
    </div>
  )
}

export default Navbar


