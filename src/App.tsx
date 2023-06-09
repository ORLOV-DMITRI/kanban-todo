import React, { useState } from "react";
import "./App.css";
import TaskProvider from "./context/TaskContext";
import StatusProvider from "./context/StatusContext";
import TodoContainer from "./components/todo/todoContainer/TodoContainer";
import TaskModal from "./components/TaskModal/TaskModal";

function App() {
  const [isCardModalActive, setIsCardModalActive] = useState<boolean>(false);

  const onChangeActiveHandler = () => {
    setIsCardModalActive((prevActive) => !prevActive);
  };

  return (
    <TaskProvider>
      <StatusProvider>
        <div className="container">
          <TodoContainer />
          <TaskModal
            isActive={isCardModalActive}
            onChangeActive={onChangeActiveHandler}
          />
        </div>
      </StatusProvider>
    </TaskProvider>
  );
}

export default App;
