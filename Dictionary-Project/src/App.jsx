import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const title = 'Test'

  return (
    <>
      <Header title={title}/>
    </>
  )
}

export default App
