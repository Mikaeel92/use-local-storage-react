import React, { useState } from 'react'
import { localStorageHook } from './LocalStorageHook'

const App = () => {

  const [input, setInput] = useState('')

  const {setItem, getItem, removeItem} = localStorageHook('name')

  return (
    <div className='flex flex-col bg-gray-950 gap-4 w-screen h-screen items-center justify-center'>
      <h1 className='text-white text-4xl font-bold'>UseLocalStorage</h1>
      <input 
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className='bg-gray-700 outline-none  focus:border border-yellow-500 shadow-md text-xl text-white rounded-md w-[1200px] px-6 py-4'
      />
      <div className='flex gap-4'>
        <button 
        className='bg-yellow-500 hover:bg-yellow-600 text-xl text-black px-4 py-4 rounded-md' 
        onClick={() => setItem(input)}>Set</button>
        <button 
        className='bg-yellow-500 hover:bg-yellow-600 text-xl text-black px-4 py-4 rounded-md'
        onClick={() => console.log(getItem())}>Get</button>
        <button 
        className='bg-yellow-500 hover:bg-yellow-600 text-xl text-black px-4 py-4 rounded-md'
        onClick={removeItem}>Remove</button>
      </div>
    </div>
  )
}

export default App