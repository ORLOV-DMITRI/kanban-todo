import { ICONS } from "../../../constants/icons";
import { FC, MouseEvent, useContext, useState, ChangeEvent } from "react";
import { TaskContext } from "../../../context/task/task-context";
import "./task.css";
import { Title } from "./title/title";
import { Description } from "./description/description";
import { TaskType } from "../../../types/global";

type TaskModalFormType = {
  onCloseModal: (newStatus: boolean) => void;
  task: TaskType;
  onChangeTitle: (title: string) => void;
  title: string;
};

export const TaskModalForm: FC<TaskModalFormType> = ({
  onCloseModal,
  task,
  onChangeTitle,
  title,
}) => {
  console.log("Приходит : " + task.title);
  const handleModalClose = (e: MouseEvent<HTMLButtonElement>) => {
    onCloseModal(false);
  };
  console.log("Приходит : " + title);

  return (
    <div className="task">
      <div className="task__container">
        <Title task={task} onChangeTitle={onChangeTitle} title={title} />
        <Description description={task.description} />
        {/* <div className="task__comment">
          <ul>
            {currentTask.comment.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div> */}
      </div>
      {/* <button onClick={handleModalClose}>{ICONS.delete()}</button> */}
    </div>
  );
};
