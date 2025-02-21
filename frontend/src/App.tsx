import { useState } from 'react'
import './App.css'
import Drawing from './components/Drawing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Drawing></Drawing>
    </>
  )
}

export default App
