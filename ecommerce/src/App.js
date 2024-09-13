import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {
    const [count, setCount] = useState(1)
    useEffect(()=>console.log("You are clicked"),[count])
  return (
    <div>
        {count}
        <button onClick={()=> setCount(count+1)}>Change</button>
    </div>
  )
}
export default App;