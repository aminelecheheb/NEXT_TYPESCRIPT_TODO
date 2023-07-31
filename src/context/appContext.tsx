import React, { useContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  toDos: [""],
};

const AppContext = React.createContext<ContextType>({
  state: {},
  addToDo: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToDo = (toDo: string) => {
    dispatch({ type: "ADD_TODO", payload: toDo });
  };

  return (
    <AppContext.Provider value={{ state, addToDo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
