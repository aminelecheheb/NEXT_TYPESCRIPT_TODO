const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
