import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { TaskProvider } from "./context/task/task-provider";
import { StatusProvider } from "./context/status/status-provider";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { TaskModalForm } from "./components/modal-window/task/task";
import { TaskType } from "./types/global";
import { AuthorModal } from "./components/modal-window/author/author-modal/author-modal";
import { TaskModal } from "./components/modal-window/task/task-modal/task-modal";
const initTask = {
  id: "123",
  title: "Заголовок Заголовок Заголовок",
  description: "Описание Описание Описание Описание Описание",
  comment: [
    {
      id: "111",
      text: "Комент 1 Комент 1 Комент 1 Комент 1 Комент 1",
      author: "DImas",
    },
  ],
  status: "TODO",
  author: "Dimas",
};
function App() {
  const [currentAuthor, setCurrentAuthor] = useState<string>(
    localStorage.getItem("author") || ""
  );
  const [isTaskModalActive, setIsTaskModalActive] = useState<boolean>(false);
  const [isAuthorModalActive, setIsAuthorModalActive] = useState<boolean>(
    currentAuthor ? false : true
  );
  const [currentTask, setCurrentTask] = useState<TaskType>();

  // const onDisplayedTaskChange = (taskId: string) => {
  //   setDisplayedTaskId(taskId);
  // };

  const handleTaskModalChange = (newState: boolean) => {
    setIsTaskModalActive((prevActive) => !prevActive);
  };
  const handleTaskModal = (newState: boolean, task: TaskType) => {
    setCurrentTask(task);
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
  const checkIsCurrentTask = () => {
    if (currentTask) {
      return (
        <TaskModal
          isActive={isTaskModalActive}
          onCloseModal={handleTaskModalChange}
          task={currentTask}
        />
      );
    }
  };

  return (
    <div>
      <AuthorModal
        isActive={isAuthorModalActive}
        onCloseModal={handleAuthorModalChange}
      >
        <Author
          setAuthor={handleAuthorSave}
          author={currentAuthor}
          onCloseModal={handleAuthorModalChange}
        />
      </AuthorModal>
      <div className="container">
        <Header
          author={currentAuthor}
          displayAuthor={isAuthorModalActive}
          onDeleteAuthor={handleAuthorDelete}
        />
        <Container onOpenModal={handleTaskModal} />
        {checkIsCurrentTask()}
      </div>
    </div>
  );
}

export default App;
