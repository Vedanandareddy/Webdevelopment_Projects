import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState({ value: '', isCompleted: false, id: uuidv4() })
  const [todos, settodos] = useState([])
  const [show, setshow] = useState(true)

  function handlechange(e) {
    setTodo({ ...todo, value: e.target.value })
  }





  useEffect(() => {
    console.log("this is from first render")
    let data = localStorage.getItem("todos")
    let pdata = JSON.parse(data)
    settodos(pdata)
  }, [])


  useEffect(() => {
    console.log("this from todos")
    console.log(todos)
    let data = todos
    let pdata = JSON.stringify(data)
    localStorage.setItem("todos", pdata)
  }, [todos])





  async function handleadd() {

    // Use the functional form of setTodos to ensure you're working with the latest state
    settodos(prevtodos => [...prevtodos, todo]);

    // Reset the todo input field
    setTodo({ value: '', isCompleted: false, id: uuidv4() });
    // Save data after updating todos
  }


  function handledone(e) {
    let id = e.target.name;
    let changed = todos.filter((item) => item.id == id)
    let newtodos = todos.filter((item) => item.id != id)
    changed[0].isCompleted = !changed[0].isCompleted
    newtodos = [...newtodos, changed[0]]
    settodos(newtodos)
  }



  function handleremove(e) {
    let id = e.target.name;
    let newtodos = todos.filter((item) => item.id != id)
    if (newtodos.length == 0) {
      settodos([])
    }
    else {
      settodos(newtodos)
    }
  }


  function onshowchange(e){
    let val=e.target.checked;
    setshow(val)
  }





  return (
    <>
      <Navbar />



      <div className="content bg-[#0d0714] text-white h-[93vh] flex  justify-center p-5 ">
        <div className='w-1/2 h-[95%] bg-[#202020] flex flex-col p-3 rounded-lg'>

          <div className="heading flex justify-center  "><span className='text-center font-bold font-sans text-3xl text-[#b9b9b9] py-3'>Daily Todo's</span></div>

          <div className="adding flex   items-center justify-center my-8  gap-4 ">

            <input className='text-white  rounded-xl bg-[#202020] p-2 px-6 mb-4 w-3/4 outline-none h-16  text-xl border  border-[#373737] ' type="text" value={todo.value} onChange={handlechange} placeholder='Add a task' />
            <button className='bg-[#626ed9] text-black  p-2 mb-4 w-1/6 h-16 text-lg  rounded-lg' onClick={handleadd}>Add Task</button>
          </div>


          <div className="w-1/1 justify-center flex gap-2 m-3 items-center">
            <input
              id="showcmp"
              type="checkbox"
              checked={show}
              onChange={(e)=>onshowchange(e)}
              className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 checked:bg-blue-500 checked:border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 transition duration-200"
            />
            <label htmlFor="showcmp" className="text-white">
              Show Completed Tasks
            </label>
          </div>




          <div className="flex flex-col my-3 gap-4 overflow-y-auto">

            {todos.length == 0 && <div className='text-center text-xl text-gray-600'> No Todos to display</div>}
            {todos.length >= 1 && todos.map((item, index) => (
              (show || !item.isCompleted) &&
              <div key={item.id} className={`task flex justify-between w-[90%] h-16 p-4 mx-auto  text-white  rounded-xl bg-[#202020] items-center text-xl border  border-[#373737] ${item.isCompleted ? "bg-black/50  " : ""} `}>

                <div className={`item ${item.isCompleted ? 'line-through' : ''} `}>{item.value}</div>

                <div className="operations flex justify-between gap-8 p-1 ">

                  <button name={item.id} className=' bg-[#ecbb5b] px-3 py-1 w-fit  rounded-lg border border-[#373737]   text-black ' onClick={(e) => handledone(e)}> {item.isCompleted ? 'Undone' : 'Done'} </button>
                  <button name={item.id} className=' bg-[#c64444] px-3 py-1 w-fit  rounded-lg border border-[#373737]  text-black' onClick={(e) => handleremove(e)}> Remove</button>

                </div>

              </div>
            ))}



          </div>


        </div>
      </div>



    </>
  )
}

export default App
