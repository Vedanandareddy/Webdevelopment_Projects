import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
const nums=new Array(100).fill(2).map((_,i)=>{
  return {
    index:i,
    isMagical:i==90
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(nums)
  console.log(number)

  // const magical=number.find((item)=>{return item.isMagical==true})   // expensive task we want to avoid it to run on every render 
  // when using arrow functions  in flower brackets must use return statement to return without it if contains single line then it is returned 
  // console.log(magical)

  // so we use useMemo 
  const magical = useMemo(() => number.find((item)=>{return item.isMagical==true}) , [number])
  // first argument is the expensive function that returns a value which is returned by usememo and second parameter contains the value if changed the function should be computed again

  // basically it stores or memoises the value and doesnot run on every render even if the whole function runs on every render it only runs if the given argument has changed on that render and updates the value based on it the dependency


  return (
    <>
      <div>the magical number is {magical.index}</div>
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
