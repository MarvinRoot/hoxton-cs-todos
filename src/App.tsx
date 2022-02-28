import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  title: string
}

export function addTodo(todos: Todo[], title: string) {
  let newTodo = {id: todos.length+1, title: title}
  return [...todos, newTodo]
}

export function removeTodo(todos: Todo[], id: number) {
  return todos.filter(todo => todo.id !== id)
}

export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Make dinner' 
    },
    {
      id: 2,
      title: 'Drink 2lt of water'
    },
    {
      id: 3,
      title: 'Run a unit test'
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src= 'src\shia-labeouf.gif' className="App-logo" alt="logo" />
        <h1>JUST DO IT!</h1>
        <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}
            <button onClick={() => {
              const updatedTodos = removeTodo(todos, todo.id)
              setTodos(updatedTodos)}}>
              x
            </button>
          </li> ))}

        </ul>
        <button onClick={() => {
          const updatedTodos = addTodo(todos, 'New Todo')
          setTodos(updatedTodos)
        }}>Add a todo</button>
        
      </header>
    </div>
  )
}

export default App
