import { useState } from "react";
import useSound from "use-sound";

interface TodoFormProps {
  handleAddTodo: (task: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ handleAddTodo }) => {
  const [task, setTask] = useState("");

  const [playbackRate, setPlaybackRate] = useState(0.75);

  // Here needs to use ES6 types to import the track
  const note = require("../sounds/beep.mp3");

  const [play] = useSound(note);

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

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

      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};
