import React, { useContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  toDos: [],
  darkMode: false,
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  addToDo: () => {},
  removeToDo: () => {},
  toggleDarkMode: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToDo = (toDo: TodoType) => {
    dispatch({ type: "ADD_TODO", payload: toDo });
  };

  const removeToDo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <AppContext.Provider value={{ state, addToDo, removeToDo, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
