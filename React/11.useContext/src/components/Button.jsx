import React from 'react'
import Info from './Info'
import { useContext } from 'react'
import { counterContext } from '../context/first'

const Button = () => {
    const counter=useContext(counterContext)
  return (
    <div>
      <button onClick={() => counter.setCount(counter.count + 1)}><span><Info/></span></button>

      {/* onClick={() => counter.setCount(prevCount => prevCount + 1)}this works because it can update based on the previous value */}

      {/* both methods work  */}
 
    </div>
  )
}

export default Button
