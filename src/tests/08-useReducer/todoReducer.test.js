import { todoReducer } from '../../08-useReducer/todoReducer'

describe('Testing the todoReducer', () => {
  const initialState = [{ id: 1, description: 'Test todo', done: false }]

  test('should return the default state', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('should add a new todo', () => {
    const action = {
      type: '[TODO] Add',
      payload: {
        id: 2,
        description: 'New todo test',
        done: false,
      },
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('should delete a todo', () => {
    const action = {
      type: '[TODO] Delete',
      payload: 2,
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(1)
  })

  test('should toggle a todo', () => {
    const action = {
      type: '[TODO] Toggle',
      payload: 1,
    }

    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)
  })
})
