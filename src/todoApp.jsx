import { useState } from 'react'
function TodoApp() {
  
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
                  editTodo(todo.id, prompt('Edit todo:', todo.text))
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