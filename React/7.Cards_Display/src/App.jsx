import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState(null)
  //  data is created as a state because it is displayed and on fetching data we want to render page again to show data 

  async function main(){
    let data=await fetch('https://jsonplaceholder.typicode.com/todos')
    let pdata= await data.json()
    setData(pdata)
  }

  useEffect(() => {
    main()
    // runs only on first render  avoiding fetching data on every render 
  }, [])
  

 
  

  return (
    <>
    <Navbar/>
      <div className="cards flex flex-wrap ">
       {data!=null ? data.map(d=>(
        <Card key={d.id} data={d}/>
       )) : "" }
      </div>

    </>
  )
}

export default App
