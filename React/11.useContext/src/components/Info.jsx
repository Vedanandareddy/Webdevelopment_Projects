import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/first'

const Info = () => {
    const counter=useContext(counterContext)
  return (
    <div>
      The number is {counter.count}
      {/* we can acces value from app.jsx without prop drilling  */}
    </div>
  )
}

export default Info
