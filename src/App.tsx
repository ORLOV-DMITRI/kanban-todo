import { useState, useContext } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { AuthorModal } from "./components/modal-window/author/author-modal/author-modal";
import { TaskModal } from "./components/modal-window/task/modal/task-modal";
import { AuthorContext } from "./context/author/author-context";

function App() {
  const { author } = useContext(AuthorContext);

  const [isTaskModal, setIsTaskModal] = useState<boolean>(false);

  const [isAuthorModalState, setIsAuthorModalState] = useState<boolean>(
    author ? false : true
  );

  const handleTaskModalStateChange = () => {
    setIsTaskModal((prevState) => !prevState);
  };
  const handleAuthorModalStateChange = (newState: boolean) => {
    setIsAuthorModalState(newState);
  };

  return (
    <div>
      <AuthorModal
        hasAuthor={isAuthorModalState}
        onStateChange={handleAuthorModalStateChange}
      >
        <Author onModalStateChange={handleAuthorModalStateChange} />
      </AuthorModal>
      <div className="container">
        <Header
          hasAuthor={isAuthorModalState}
          onModalStateChange={handleAuthorModalStateChange}
        />
        <Container onModalOpen={handleTaskModalStateChange} />
        <TaskModal
          isActive={isTaskModal}
          onCloseModal={handleTaskModalStateChange}
        />
      </div>
    </div>
  );
}

export default App;
