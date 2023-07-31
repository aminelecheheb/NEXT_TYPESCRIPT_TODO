const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case "REMOVE_TODO":
      let newTodos: string[];
      newTodos = state.toDos.filter((todo) => {
        return todo !== action.payload;
      });
      return {
        ...state,
        toDos: newTodos,
      };

    default:
      return state;
  }
};

export default reducer;
