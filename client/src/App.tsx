import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {

  const initial = {
    "users": [],
  }

  const [backendData, setBackendData] = useState(initial)

  useEffect(() => {
    fetch("/api")
    .then(
      response => response.json()
    )
    .then(
      (data) => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
    <div>
     {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ):(
          backendData.users.map((user, ind) => (
            <p key={ind}>{user}</p>
          ))
        )} 
    </div>
  )
}

export default App