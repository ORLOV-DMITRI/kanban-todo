import { FC, useState, useContext, ChangeEvent } from "react";
import "../../modal.css";
import { TaskModalType } from "../../../../types/modal";
import { TaskModalForm } from "../task";
import { TaskContext } from "../../../../context/task/task-context";

export const TaskModal: FC<TaskModalType> = ({
  isActive,
  onCloseModal,
  task,
}) => {
  const [newTitle, setNewTitle] = useState<string>(task.title);
  const { taskUpdate } = useContext(TaskContext);
  console.log("Приходит : " + task.title);
  console.log("Приходит : " + newTitle);

  const handleChangeTitle = (title: string) => {
    // setNewTitle(title);
  };
  const handleModalClose = () => {
    setNewTitle("");
    onCloseModal(isActive);
  };
  return (
    <div
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={handleModalClose}
    >
      <div
        className={
          isActive ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <TaskModalForm
          onChangeTitle={handleChangeTitle}
          title={task.title}
          task={task}
          onCloseModal={onCloseModal}
        />
      </div>
    </div>
  );
};
