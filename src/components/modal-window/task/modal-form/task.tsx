import { FC, useContext } from "react";
import { TaskContext } from "../../../../context/task/task-context";
import "./task.css";
import { Title } from "../title/title";
import { Description } from "../description/description";
import { TaskType } from "../../../../types/global";
import { CommentsContainer } from "../comments/comments-container/comments-container";

type TaskModalFormType = {
  task: TaskType;
};

export const TaskModalForm: FC<TaskModalFormType> = ({ task }) => {
  const { taskUpdate } = useContext(TaskContext);

  return (
    <div className="task">
      <div className="task__container">
        <Title task={task} taskUpdate={taskUpdate} />
        <div>
          <p>
            в колонке <span>{task.status}</span>
          </p>
          <p>
            Автор: <span>{task.author}</span>
          </p>
        </div>
        <Description task={task} taskUpdate={taskUpdate} />
        <CommentsContainer task={task} taskUpdate={taskUpdate} />
      </div>
      {/* <button onClick={handleModalClose}>{ICONS.delete()}</button> */}
    </div>
  );
};
