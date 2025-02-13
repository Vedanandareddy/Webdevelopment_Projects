import { use, useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  // usecallback is like useMemo for functions , it memoises funcions and only rerenders when specified dependency changes 


  // const changefunc=(function(){
  //   return "changing it"
  // })
  // even though function did not change  it is treated as different function every render so passed to memoised navbar as changed prop so the nav renders again even if the props are not changed 
  //  to avoid this multiple rendering we used useCallback 




  const changefunc = useCallback( (
      function() {
        return "changing it"
      }
    ),
    [],
  )

  // this freezes the function to render only  when the dependecy specified is changed  , memoises the function ,as its not changed the navbar is not rendered multiple times 



  return (
    <>
      <Navbar adjective={"good"} changeme={changefunc} />
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
