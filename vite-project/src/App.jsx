import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')

  return (
    <div>
      <h1>UseLocalStorage</h1>
      <input 
      type='text'
      value={}
      onChange={}
      />
      <div>
        <button onClick={}>Set</button>
        <button onClick={}>Get</button>
        <button onClick={}>Remove</button>
      </div>
    </div>
  )
}

export default App