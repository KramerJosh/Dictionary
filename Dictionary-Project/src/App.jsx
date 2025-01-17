import { useState } from 'react'
import './App.css'
import Header from './components/Header'
// import List from './components/List'
import DictionarySelector from './components/DictionarySelector'

function App() {
  const title = 'Test'

  return (
    <>
      <Header title={title}/>
      {/* <List title={title}/> */}
      <DictionarySelector />
    </>
  )
}

export default App
