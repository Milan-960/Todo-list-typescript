import "./App.css";
import TodoList from "./components/TodoList";
import * as example1 from "./animation/groovyWalk.json";
import LottiePlayer from "./animation/walk";

function App() {
  return (
    <div className="App">
      <TodoList />
      <LottiePlayer animationData={example1} />
    </div>
  );
}

export default App;
