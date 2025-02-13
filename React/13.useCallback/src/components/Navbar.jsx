import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,changeme}) => {
    console.log("Nav rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button>{changeme()}</button>
    </div>
  )
}

export default memo(Navbar)


// usually a component rerenders whenever the parent component rerenders but by using memo it can specify to rerender only when props passed are changed , which increases the efficiency of the site if rerendering causing high cost 
