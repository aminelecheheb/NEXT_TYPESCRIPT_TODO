type StateType = {
  toDos: string[];
  darkMode: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  addToDo: (value: string) => void;
  removeToDo: (value: string) => void;
  toggleDarkMode: () => void;
};
