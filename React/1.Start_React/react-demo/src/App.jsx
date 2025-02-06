import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar bg="bg_black" />
    <div>{count}</div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Click Me</button>

    </>
  )
}

export default App


// react state is used instead of plain javascript variables because the change in state triggers all uses of the state but vaibles change applied to the code written after the change 
