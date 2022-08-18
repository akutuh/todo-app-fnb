import { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    createTodo({
      content: newTodo,
    })
    setNewTodo('')
  }

  return (
    <form onSubmit={addTodo}>
      <input onChange={handleTodoChange} value={newTodo} type="text"></input>
      <button type="submit">add todo</button>
    </form>
  )
}

export default TodoForm
