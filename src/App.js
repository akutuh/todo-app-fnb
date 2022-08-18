import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import todoService from './services/todos'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then((todos) => setTodos(todos))
  }, [])

  const addTodo = async (todoObject) => {
    try {
      const response = await todoService.create(todoObject)
      setTodos(todos.concat(response))
    } catch (exception) {
      console.log(exception.message)
    }
  }

  const deleteTodo = async (todoObject) => {
    try {
      if (window.confirm(`Remove todo ${todoObject.content}?`)) {
        await todoService.remove(todoObject)
        setTodos(todos.filter((todo) => todo.id !== todoObject.id))
      }
    } catch (exception) {
      console.log(exception.message)
    }
  }

  return (
    <div className="App">
      <h2>Today's todo's</h2>
      <TodoForm createTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
