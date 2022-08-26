import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (newTodo) => {
    const action = {
      type: '[TODO] Add',
      payload: newTodo,
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Delete',
      payload: id,
    }
    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle',
      payload: id,
    }
    dispatch(action)
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
