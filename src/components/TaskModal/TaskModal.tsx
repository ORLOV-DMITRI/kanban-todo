import { FC } from "react";
import "./TaskModal.css";
import { TaskModalType } from "../../@types/modalType";

const TaskModal: FC<TaskModalType> = ({ isActive, onChangeActive }) => {
  const openCardModalHandler = () => {
    onChangeActive();
  };
  return (
    <div
      className={isActive ? "card-modal active" : "card-modal"}
      onClick={openCardModalHandler}
    >
      <div
        className={
          isActive ? "card-modal__content active" : "card-modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* <CardModalForm task={task} onChangeTaskTitle={onChangeTaskTitle} /> */}
      </div>
    </div>
  );
};

export default TaskModal;
