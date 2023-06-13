import { FC, useContext } from "react";
import "../../modal.css";
import { TaskContext } from "../../../../context/task/task-context";
import { Container } from "../container/container";
import { TaskModalType } from "../../../../types/modal-window/task/task";

export const TaskModal: FC<TaskModalType> = ({ isActive, onCloseModal }) => {
  const { tasks, taskUpdate } = useContext(TaskContext);

  const filteredTask = tasks.find((task) => task.isActive);

  const handleModalClose = () => {
    if (filteredTask) {
      filteredTask.isActive = false;
      taskUpdate(filteredTask);
    }
    onCloseModal(isActive);
  };
  return (
    <div
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={handleModalClose}
    >
      <div
        className={
          isActive
            ? "card-modal__content task-modal active"
            : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {filteredTask ? (
          <Container task={filteredTask} onCloseModal={handleModalClose} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
