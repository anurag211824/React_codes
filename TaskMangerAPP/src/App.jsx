import React from 'react'
import Header from './Components/Header'
import TaskInput from './Components/TaskInput'
import './App.css';

const App = () => {
  return (
  <div className='main'>
    <Header></Header>
    
    <TaskInput></TaskInput>
  </div>
  )
}

export default App