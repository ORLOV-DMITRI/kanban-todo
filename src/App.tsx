import { useState, useContext } from "react";
import "./App.css";
import { Container } from "./components/todo/container/container";
import { Header } from "./components/header/header";
import { Author } from "./components/modal-window/author/author";
import { AuthorModal } from "./components/modal-window/author/author-modal/author-modal";
import { TaskModal } from "./components/modal-window/task/modal/task-modal";
import { AuthorContext } from "./context/author/author-context";
// has есть ли
// is
function App() {
  const { author } = useContext(AuthorContext);

  const [isTaskModalState, setIsTaskModalState] = useState<boolean>(false);

  const [isAuthorModalState, setIsAuthorModalState] = useState<boolean>(
    author ? false : true
  );

  const handleTaskModalStateChange = () => {
    setIsTaskModalState((prevState) => !prevState);
  };
  const handleAuthorModalStateChange = (newState: boolean) => {
    setIsAuthorModalState(newState);
  };

  return (
    <div>
      <AuthorModal
        currentState={isAuthorModalState}
        onChangeState={handleAuthorModalStateChange}
      >
        <Author onModalStateChange={handleAuthorModalStateChange} />
      </AuthorModal>
      <div className="container">
        <Header
          displayAuthor={isAuthorModalState}
          setModalState={handleAuthorModalStateChange}
        />
        <Container onOpenModal={handleTaskModalStateChange} />
        <TaskModal
          isActive={isTaskModalState}
          onCloseModal={handleTaskModalStateChange}
        />
      </div>
    </div>
  );
}

export default App;
