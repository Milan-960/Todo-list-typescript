import { useState } from "react";

interface TodoFormProps {
  handleAddTodo: (task: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ handleAddTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task) {
      handleAddTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};
