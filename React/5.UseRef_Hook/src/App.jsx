import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  // case 2 : used to manipulate dom elements by creating  a reference and assigning it to them by using  ref={btnref} 
  const btnref=useRef(null)
  useEffect(() => {
    console.log("rendered again")
  })

  function focus(){
    btnref.current.focus()
    // accesed using ref.current 
  }
  
  

  return (
    <>
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={focus}>Get focus on above button</button>
    </>
  )
}

export default App
