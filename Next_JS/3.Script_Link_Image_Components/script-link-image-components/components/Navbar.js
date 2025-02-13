import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4 px-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>

    // by using 'a' tag whenever we click on it reloads the page to direct the page to the link to avoid reloading we use the link tag which changes pages without reloading 
    // Link gives easy navigation without the need to reload 
    
  )
}

export default Navbar
