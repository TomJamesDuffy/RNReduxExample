const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        }
    default:
      return state;
  }
}

export default reducer;

// If you want to add more reducers just add more case statements
// If you want to add different types of reducers you need to use the combineReducer({}) method
