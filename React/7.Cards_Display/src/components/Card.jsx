import React from 'react'

const Card = ({data}) => {
    if (!data) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
      }

  return (
    <div className='w-64  p-5 bg-teal-300 m-2 '>
      <img className=' object-contain  object-center w-52 ' src="https://images.unsplash.com/photo-1738168601630-1c1f3ef5a95a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{data.title}</h1>
    </div>
  )
}

export default Card
