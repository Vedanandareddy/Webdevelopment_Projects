import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [value, setvalue] = useState(0)
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0)
  

  // Case1  executes on every render of this functional component  
  useEffect(() => {
    alert("I will execute on every render")

  })


  // Case 2 executes only on first render if third argument is given as empty array 
  useEffect(() => {
    alert("I will execute only on the first render")
    setcolor(color+1)
  }, [])


  // Case 3 executes whenever a variable changes , the initialization of variable is treated as change used for change in state and props 
  useEffect(() => {
    alert("value has been changed ,when a state variable is changed the whole componenet is rerendered ")

  }, [value])


  useEffect(() => {
    alert("count value has been changed ,when a state variable is changed the whole componenet is rerendered ")
  }, [count])








  return (
    <>
       <Navbar  color={"blue"+color}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setvalue((value) => value + 1)}>
          value is {value}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
