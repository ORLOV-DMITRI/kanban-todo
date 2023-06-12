import { FC, KeyboardEvent } from "react";
import "../task.css";
import { Title } from "../title/title";
import { Description } from "../description/description";
import { TaskType } from "../../../../types/global";
import { CommentsContainer } from "../comments/comments-container/comments-container";
import { ICONS } from "../../../../constants/icons";

type TaskModalFormType = {
  task: TaskType;
  onCloseModal: () => void;
};

export const TaskModalForm: FC<TaskModalFormType> = ({
  task,
  onCloseModal,
}) => {
  return (
    <div className="task">
      <div className="task__container">
        <Title task={task} />
        <Description task={task} />
        <CommentsContainer task={task} />
      </div>
      <button className="close-btn" onClick={() => onCloseModal()}>
        X
      </button>
    </div>
  );
};
