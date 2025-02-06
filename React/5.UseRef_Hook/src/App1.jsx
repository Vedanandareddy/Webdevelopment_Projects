import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a=useRef(0)

  // Case1  : can be used to persist values across renders without trigerring a render like state when changed
  // is not ideal for displaying in the ui as the change is not reflected because it doesnot triger a render
  useEffect(() => {
    console.log("rerendering ")
    a.current+=1;
    // increments value of a when ever a render happens 
    // by use useref the value persists through renders like usestate but doesnot trigger rerenders when changed 
    console.log(`value of a is ${a.current}`)
  })
  

  return (
    <>
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
