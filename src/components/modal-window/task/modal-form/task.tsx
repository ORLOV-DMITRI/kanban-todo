import { ICONS } from "../../../../constants/icons";
import { FC, MouseEvent, useContext, useState, ChangeEvent } from "react";
import { TaskContext } from "../../../../context/task/task-context";
import "./task.css";
import { Title } from "../title/title";
import { Description } from "../description/description";
import { TaskType } from "../../../../types/global";

type TaskModalFormType = {
  task: TaskType;
};

export const TaskModalForm: FC<TaskModalFormType> = ({ task }) => {
  const { taskUpdate } = useContext(TaskContext);

  return (
    <div className="task">
      <div className="task__container">
        <Title task={task} taskUpdate={taskUpdate} />
        <Description task={task} taskUpdate={taskUpdate} />
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
