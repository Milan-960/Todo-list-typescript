import React, { useState } from "react";
import { TodoForm } from "./ToForm";
import TodoListView from "./TodoViewList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, task: string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].task = task;
    setTodos(newTodos);
  };

  const handleToggleCompleted = (id: number) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm handleAddTodo={handleAddTodo} />

      <TodoListView
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
};

export default TodoList;
