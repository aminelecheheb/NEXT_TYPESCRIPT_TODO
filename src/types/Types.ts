type TodoType = {
  id: number;
  title: string;
};

type EditType = {
  isEditing: boolean;
  elementId: number;
  newValue: string;
};

type AlertType = {
  show: boolean;
  msg: string;
};

type StateType = {
  toDos: TodoType[];
  darkMode: boolean;
  edit: EditType;
  alert: AlertType;
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
  showAlert: (msg: string) => void;
  hideAlert: () => void;
};
