import { ICONS } from "../../../constants/icons";
import { FC, MouseEvent, useContext } from "react";
import { TaskContext } from "../../../context/task/task-context";
import "./task.css";
import { Title } from "./title/title";
import { Description } from "./description/description";

type TaskModalFormType = {
  onCloseModal: (newStatus: boolean) => void;
};

export const TaskModalForm: FC<TaskModalFormType> = ({ onCloseModal }) => {
  const handleModalClose = (e: MouseEvent<HTMLButtonElement>) => {
    onCloseModal(false);
  };

  const { displayedTask } = useContext(TaskContext);

  return (
    <div className="task">
      <div className="task__container">
        <Title title={displayedTask.title} />
        <Description description={displayedTask.description} />
        <div className="task__comment">
          <ul>
            {displayedTask.comment.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <button onClick={handleModalClose}>{ICONS.delete()}</button> */}
    </div>
  );
};
