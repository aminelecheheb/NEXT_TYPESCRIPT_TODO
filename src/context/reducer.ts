const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case "REMOVE_TODO":
      let newTodos = state.toDos.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        toDos: newTodos,
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case "EDIT_TODO":
      let tempTodos = state.toDos.map((todo) => {
        if (todo.id === state.edit.elementId) {
          todo.title = state.edit.newValue;
        }
        return todo;
      });
      return {
        ...state,
        toDos: tempTodos,
        edit: {
          isEditing: action.payload.isEditing,
          elementId: action.payload.elementId,
          newValue: action.payload.newValue,
        },
      };

    default:
      return state;
  }
};

export default reducer;
