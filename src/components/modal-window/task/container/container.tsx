import { FC } from "react";
import "../task.css";
import { Title } from "../title/title";
import { Description } from "../description/description";
import { CommentsContainer } from "../comments/comments-container/comments-container";
import { TaskContainerType } from "../../../../types/modal-window/task/task";

export const Container: FC<TaskContainerType> = ({ task, onCloseModal }) => {
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
