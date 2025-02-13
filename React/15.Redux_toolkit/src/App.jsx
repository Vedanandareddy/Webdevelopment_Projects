import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./App.css"
// useSelector used to access value from the store and useDispatch used to apply functions on the store variable 
import { decrement, increment, multiplybyValue } from './redux/counter/counterslice'
// import needed functions from the slice created to use in this component 



function App() {
  const count = useSelector((state) => state.counter.value)
  // read value the slice variable from the store 
  const dispatch = useDispatch()
  // get dispatch to  dispatch the functions through this 

  return (
    <>
      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
      <div>The value of count is {count}</div>
      <button onClick={() => {
        dispatch(increment())
      }}>+</button>
      <button onClick={()=>{
        dispatch(multiplybyValue(2))
      }}>*</button>
    </>
  )
}

export default App
