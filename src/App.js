import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoObject) => {
    setTodos(todos.concat(todoObject))
  }

  return (
    <div className="App">
      <TodoForm createTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
