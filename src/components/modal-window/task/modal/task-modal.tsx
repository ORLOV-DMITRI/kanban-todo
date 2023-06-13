import { FC, useContext, KeyboardEvent, MouseEvent } from "react";
import "../../modal.css";
import { TaskContext } from "../../../../context/task/task-context";
import { Container } from "../container/container";
import { TaskModalType } from "../../../../types/modal-window/task/task";

export const TaskModal: FC<TaskModalType> = ({ isActive, onCloseModal }) => {
  const { tasks, taskUpdate } = useContext(TaskContext);
  const filteredTask = tasks.find((task) => task.isActive);

  const taskActiveRemove = () => {
    if (filteredTask) {
      filteredTask.isActive = false;
      taskUpdate(filteredTask);
    }
  };
  const handleModalClose = () => {
    taskActiveRemove();
    onCloseModal();
  };
  const handleKeyEvent = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isActive) {
      if (e.code === "Escape") {
        handleModalClose();
      }
    }
  };

  return (
    <div
      tabIndex={0}
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={handleModalClose}
      onKeyDown={handleKeyEvent}
    >
      <div
        className={
          isActive
            ? "card-modal__content task-modal active"
            : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {filteredTask && (
          <Container task={filteredTask} onCloseModal={handleModalClose} />
        )}
      </div>
    </div>
  );
};
