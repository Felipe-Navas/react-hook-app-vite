export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type ABC is not supported')

    default:
      return state
  }
}
