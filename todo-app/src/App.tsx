import React from 'react'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

const App = () => {
  return (
    <main>
      <h1>ToDo-List APP</h1>
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App
