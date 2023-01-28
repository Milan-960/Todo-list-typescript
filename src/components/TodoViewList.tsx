import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface TodoListViewProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (id: number, task: string) => void;
  handleToggleCompleted: (id: number) => void;
}

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoListView: React.FC<TodoListViewProps> = ({
  todos,
  handleDeleteTodo,
  handleEditTodo,
  handleToggleCompleted,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");
  const [parent] = useAutoAnimate();

  const handleEditClick = (id: number) => {
    setEditingId(id);
    setEditedTask(todos.find((todo) => todo.id === id)?.task || "");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedTask("");
  };

  const handleSaveEdit = (id: number) => {
    handleEditTodo(id, editedTask);
    setEditingId(null);
    setEditedTask("");
  };

  return (
    <div>
      <ul ref={parent}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </span>
                <button onClick={() => handleEditClick(todo.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
                <button onClick={() => handleToggleCompleted(todo.id)}>
                  {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListView;
