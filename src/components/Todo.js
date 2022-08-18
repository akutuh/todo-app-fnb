const Todo = ({ todo, deleteTodo }) => {
  const removeTodo = (event) => {
    deleteTodo({
      content: todo.content,
      id: todo.id,
    })
  }
  return (
    <>
      <li key={todo.id}>
        {todo.content} <button onClick={removeTodo}>delete</button>
      </li>
    </>
  )
}

export default Todo
