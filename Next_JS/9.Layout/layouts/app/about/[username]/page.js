import React from 'react'

const aboutuser = async ({params}) => {
    let username=(await params).username
  return (
    <div>
      Hello {username}
    </div>
  )
}

export default aboutuser
