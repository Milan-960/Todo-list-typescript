export interface TodoListViewProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (id: number, task: string) => void;
  handleToggleCompleted: (id: number) => void;
}

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
