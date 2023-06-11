import { FC, useState, useContext, ChangeEvent, useEffect } from "react";
import "../../modal.css";
import { TaskModalType } from "../../../../types/modal";
import { TaskModalForm } from "../modal-form/task";
import { TaskContext } from "../../../../context/task/task-context";
import { TaskType } from "../../../../types/global";

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
          isActive ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {filteredTask ? <TaskModalForm task={filteredTask} /> : ""}
      </div>
    </div>
  );
};
