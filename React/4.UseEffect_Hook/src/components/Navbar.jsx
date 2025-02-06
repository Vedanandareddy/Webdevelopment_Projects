import React from 'react'
import { useEffect } from 'react'

const Navbar = ({ color }) => {


    // Case1  executes on every render of this functional component  
    useEffect(() => {
        alert("I will execute on every render of navbar")

    })


    // Case 3
    useEffect(() => {
        alert("color has been changed in navbar prop ,when a state variable is changed the whole componenet is rerendered ")
    
      }, [color])

    return (
        <div>
            Hey this is a navbar of {color} color
        </div>
    )
}

export default Navbar
