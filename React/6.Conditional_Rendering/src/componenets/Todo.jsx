import React from 'react'

const Todo = ({todo}) => {  //passing todo as prop 
    return (
      <div className='todo'>
        <h1>{todo.title}</h1>
        <p>{todo.desc}</p>
      </div>
    )
  }

export default Todo



