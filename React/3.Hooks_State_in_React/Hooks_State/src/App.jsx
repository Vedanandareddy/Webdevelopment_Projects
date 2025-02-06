import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // this creates a state count with initial state set to 0 and can be updated using the funcion setCount  which updates count across the page where it is used 

  return (
    <>
      <div>The count is {count}</div>
      <button onMouseEnter={()=>{
        setCount(count+1)
      }} onClick={() => {
        setCount(count + 1)
      }}>Update Count</button>

      {/* onclick is an event handler for the button   */}
    </>
  )
}

export default App
