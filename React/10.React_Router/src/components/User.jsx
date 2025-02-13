import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
    console.log(params)
    // for dynamic urls parameters can be extracted from useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default User
