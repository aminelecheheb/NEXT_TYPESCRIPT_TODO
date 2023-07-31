type TodoType = {
  id: number;
  title: string;
};

type EditType = {
  isEditing: boolean;
  elementId: number;
  newValue: string;
};

type StateType = {
  toDos: TodoType[];
  darkMode: boolean;
  edit: EditType;
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
  editTodo: (value: EditType) => void;
};
