import React from 'react'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import "./App.css"

const App = () => {
  return (
    <div className="app-container">
      <h1>ToDo-List APP</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </div>
  )
}

export default App
