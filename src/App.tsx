import { useState, useContext, KeyboardEvent } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { AuthorModal } from "./components/modal-window/author/author-modal/author-modal";
import { TaskModal } from "./components/modal-window/task/modal/task-modal";
import { AuthorContext } from "./context/author/author-context";

function App() {
  const { author } = useContext(AuthorContext);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const hasAuthor: boolean = author ? false : true;
  const [isAuthorModalOpen, setIsAuthorModalOpen] =
    useState<boolean>(hasAuthor);

  const handleTaskModalToggle = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };
  const handleAuthorModalToggle = (newState: boolean) => {
    setIsAuthorModalOpen(newState);
  };

  return (
    <div>
      <AuthorModal
        hasAuthor={isAuthorModalOpen}
        onToggleModal={handleAuthorModalToggle}
      >
        <Author onToggleModal={handleAuthorModalToggle} />
      </AuthorModal>
      <div className="container" tabIndex={0}>
        <Header
          hasAuthor={isAuthorModalOpen}
          onToggleModal={handleAuthorModalToggle}
        />
        <Container onOpenModal={handleTaskModalToggle} />
        <TaskModal
          isActive={isTaskModalOpen}
          onCloseModal={handleTaskModalToggle}
        />
      </div>
    </div>
  );
}

export default App;
