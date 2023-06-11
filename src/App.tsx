import { useState, useContext } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { AuthorModal } from "./components/modal-window/author/author-modal/author-modal";
import { TaskModal } from "./components/modal-window/task/modal/task-modal";
import { AuthorContext } from "./context/author/author-context";
const initTask = {
  id: "123",
  title: "Заголовок Заголовок Заголовок",
  description: "Описание Описание Описание Описание Описание",
  comments: [
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
  const { author } = useContext(AuthorContext);

  const [isTaskModalActive, setIsTaskModalActive] = useState<boolean>(false);
  const [isAuthorModalActive, setIsAuthorModalActive] = useState<boolean>(
    author ? false : true
  );

  const handleTaskModal = (newState: boolean) => {
    setIsTaskModalActive((prevActive) => !prevActive);
  };
  const handleAuthorModalChange = (newState: boolean) => {
    setIsAuthorModalActive(newState);
  };

  return (
    <div>
      <AuthorModal
        isActive={isAuthorModalActive}
        onCloseModal={handleAuthorModalChange}
      >
        <Author onCloseModal={handleAuthorModalChange} />
      </AuthorModal>
      <div className="container">
        <Header
          displayAuthor={isAuthorModalActive}
          onAuthorModalChange={handleAuthorModalChange}
        />
        <Container onOpenModal={handleTaskModal} />
        <TaskModal
          isActive={isTaskModalActive}
          onCloseModal={handleTaskModal}
        />
      </div>
    </div>
  );
}

export default App;
