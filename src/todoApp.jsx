import { useState } from 'react'
function TodoApp() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
  
 
    function addTodo() {
      if (newTodo.trim() !== '') {
        const newTodoItem = {
          id: todos.length + 1,
          text: newTodo,
          completed: false
        };
        setTodos([...todos, newTodoItem])
        setNewTodo('')
      }
    }
  
   
    function completeTodo(id) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo
        })
      );
    }
  
    
    function deleteTodo(id) {
      setTodos(todos.filter((todo) => todo.id !== id))
    }
  
    function editTD(id, newText) {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, text: newText };
            }
            return todo;
          })
        );
      }
  
    return (
      <div>
        <h1>Todo App</h1>
  
        <form
          onSubmit={(event) => {
            event.preventDefault()
            addTodo();
          }}
        >
          <input
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
              />
              {todo.completed ? <del>{todo.text}</del> : todo.text}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button
                onClick={() =>
                  editTD(todo.id, prompt('Edit:', todo.text))
                }
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoApp