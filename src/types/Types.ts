type TodoType = {
  id: number;
  title: string;
};

type StateType = {
  toDos: TodoType[];
  darkMode: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  addToDo: (value: TodoType) => void;
  removeToDo: (value: number) => void;
  toggleDarkMode: () => void;
};
