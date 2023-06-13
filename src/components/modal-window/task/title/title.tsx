import { FC, FocusEvent, useContext } from "react";
import { ICONS } from "../../../../constants/icons";
import { TaskContext } from "../../../../context/task/task-context";
import { TaskTitleType } from "../../../../types/modal-window/task/task";

export const Title: FC<TaskTitleType> = ({ task, onCloseModal }) => {
  const { taskUpdate, taskDelete } = useContext(TaskContext);

  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const handleKeyEvent = (e: any) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  };
  const handleTitleSave = (e: FocusEvent<HTMLInputElement>) => {
    task.title = e.target.value;
    taskUpdate(task);
  };

  return (
    <div className="task__title">
      {ICONS.title()}
      <div className="task__title-input">
        <input
          type="text"
          defaultValue={task.title}
          onFocus={handleTextSelect}
          onKeyDown={handleKeyEvent}
          onBlur={handleTitleSave}
        />
      </div>
      <div className="task__title-info">
        <div>
          В колонке:<h4>{task.status}</h4>
        </div>
        <div>
          Автор:<h4>{task.author}</h4>
        </div>
      </div>
    </div>
  );
};
