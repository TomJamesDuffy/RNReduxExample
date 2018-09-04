initialState = {
  count: 0
}

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: count + 1,
        }
    case 'DECREMENT':
      return {
        ...state,
        count: count -1,
      }
    default:
      return state;
  }
}

export default counter;