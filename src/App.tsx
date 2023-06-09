import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Modal } from "./components/modal-window/modal";
import { TaskProvider } from "./context/task/task-provider";
import { StatusProvider } from "./context/status/status-provider";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";

function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>(
    localStorage.getItem("author") || ""
  );
  const [isTaskModalActive, setIsTaskModalActive] = useState<boolean>(false);
  const [isAuthorModalActive, setIsAuthorModalActive] = useState<boolean>(
    currentAuthor ? false : true
  );

  const handleTaskModalChange = (newState: boolean) => {
    setIsTaskModalActive(newState);
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
        <div className="container">
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
            <div>Привет</div>
          </Modal>
        </div>
      </StatusProvider>
    </TaskProvider>
  );
}

export default App;
