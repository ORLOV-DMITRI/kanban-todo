import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Modal } from "./components/modal-window/modal";
import { TaskProvider } from "./context/task/task-provider";
import { StatusProvider } from "./context/status/status-provider";

function App() {
  const [isTaskModalActive, setIsTaskModalActive] = useState<boolean>(false);

  const handleTaskModalChange = (newState: boolean) => {
    setIsTaskModalActive(newState);
  };

  return (
    <TaskProvider>
      <StatusProvider>
        <div className="container">
          <Container onOpenModal={handleTaskModalChange} />
          <Modal
            isActive={isTaskModalActive}
            onCloseModal={handleTaskModalChange}
          >
            <div>Привет</div>
          </Modal>
        </div>
      </StatusProvider>
    </TaskProvider>
  );
}

export default App;
