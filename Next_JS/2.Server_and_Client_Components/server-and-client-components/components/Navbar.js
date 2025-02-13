"use client"
import React from 'react'
import { useEffect,useState } from 'react'


const Navbar = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
        <span>{count}</span>
      <button onClick={()=>{setcount(count+1)}}>Click to increment</button>
    </div>
  )
}

export default Navbar
