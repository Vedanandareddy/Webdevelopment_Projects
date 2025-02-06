import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './componenets/Todo'

function App() {
  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])


  // const moretodocmp=[<div className='hey'>This is firstone</div>,<div className='hey'>This is second one</div>,<div className='hey'>This is third one</div>] 




  // const Todo = ({todo}) => {  //passing todo as prop 
  //   return (
  //     <div className='todo'>
  //       <h1>{todo.title}</h1>
  //       <p>{todo.description}</p>
  //     </div>
  //   )
  // }
  // const todo={title:"This is First todo",description:"This is first todo description"}
  // creating a component 
  // a  component is a function that return html like code 




  return (
    <>
      <div className="card ">
        {/* <Todo todo={todo}/> */}

        {/* condtional rendering : decide whether to show or hide based on a condition  */}

        {/* <> <div> {showbtn?<button>showbtn is true</button>:"" }</div> </> */}
        {/* renders this element based on the value of showbtn */}

        {/* {showbtn &&  <button>showbtn is true</button>} */}
        {/* different way of writing above conditional rendering */}


        {/* {moretodocmp}    */}
        {/* if it is an array  of jsx elements placing it directly will render it  */}





        {/* using map function to render with specified props  */}

        {todos.map(tod =>(
           <Todo key={tod.title} todo={tod} />
          // shoul be placed next to return else ignores below code and assumes empty return  
        ))}
        {/* rendering elements in an array using map  */}





        <button onClick={() => setshowbtn(!showbtn)}>
          toggle showbtn
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
