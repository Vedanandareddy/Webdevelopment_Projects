import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [Username, setUsername] = useState("Vedananda")
  const [form, setform] = useState({Username:"", email:""})
  function clickhandler(){
    alert("Button clicked")
  }

  function handlemouseEnter(){
    alert("Mouse entered")
  }

  // function changehandler(e){
  //   setUsername(e.target.value)
  //   // This event fires when ever a change occurs in the input text and changes the state value if the state value is not chaged then input elements value will be fixed 
  // }


  function changehandler(e){
    setform({...form, [e.target.name] : e.target.value})
    //  set is a state value is an asynchronous operation so console log executes before setting of new value
    console.log(form)
    
  }
  //  handling input elements with same handler 

  return (
    <>
    <button  onClick={clickhandler}>Click on Me</button>
    {/* unlike javascript event handlers can be written directly in jsx to run a function , we avoid writing the funciton using arrow function because this causes the jsx to bloat  */}
    {/* <div className='red'  onMouseEnter={handlemouseEnter}> This is  a div</div> */}

    {/* event hadling for form input elements  */}
    <input type="text" name="Username" id="" value={form.Username}  onChange={changehandler}/>
    {/* without handling  change event value of this element is fixed and doesnot change when modified as the given state is not changed  */}

    <input type="text" name="email" id="" value={form.emaill}  onChange={changehandler}/>
     {/* this is the  standard way to handle input elements  */}
    </>
  )
}

export default App
