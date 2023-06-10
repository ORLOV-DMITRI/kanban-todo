import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Modal } from "./components/modal-window/modal";
import { TaskProvider } from "./context/task/task-provider";
import { StatusProvider } from "./context/status/status-provider";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { TaskModalForm } from "./components/modal-window/task/task";

function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>(
    localStorage.getItem("author") || ""
  );
  const [isTaskModalActive, setIsTaskModalActive] = useState<boolean>(false);
  const [isAuthorModalActive, setIsAuthorModalActive] = useState<boolean>(
    currentAuthor ? false : true
  );

  const handleTaskModalChange = (newState: boolean) => {
    setIsTaskModalActive((prevActive) => !prevActive);
  };
  const handleAuthorModalChange = (newState: boolean) => {
    setIsAuthorModalActive(newState);
  };
  const handleAuthorSave = (author: string) => {
    setCurrentAuthor(author);
    localStorage.setItem("author", author);
  };
  const handleAuthorDelete = () => {
    setIsAuthorModalActive(true);
    setCurrentAuthor("");
    localStorage.removeItem("author");
  };

  return (
    <TaskProvider>
      <StatusProvider>
        <Modal
          isActive={isAuthorModalActive}
          onCloseModal={handleAuthorModalChange}
        >
          <Author
            setAuthor={handleAuthorSave}
            author={currentAuthor}
            onCloseModal={handleAuthorModalChange}
          />
        </Modal>

        <div className="container">
          <Header
            author={currentAuthor}
            displayAuthor={isAuthorModalActive}
            onDeleteAuthor={handleAuthorDelete}
          />
          <Container onOpenModal={handleTaskModalChange} />
          <Modal
            isActive={isTaskModalActive}
            onCloseModal={handleTaskModalChange}
          >
            <TaskModalForm onCloseModal={handleTaskModalChange} />
          </Modal>
        </div>
      </StatusProvider>
    </TaskProvider>
  );
}

export default App;
