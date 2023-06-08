import React from "react";
import "./App.css";
import TaskProvider from "./context/TaskContext";
import StatusProvider from "./context/StatusContext";
import TodoContainer from "./components/todo/todoContainer/TodoContainer";

function App() {
  return (
    <TaskProvider>
      <StatusProvider>
        <div className="container">
          <TodoContainer />
          {/* <CardModal /> */}
        </div>
      </StatusProvider>
    </TaskProvider>
  );
}

export default App;
