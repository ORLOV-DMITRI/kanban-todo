import { FC, FocusEvent, useContext } from "react";
import { ICONS } from "../../../../constants/icons";
import { TaskType } from "../../../../types/global";
import { TaskContext } from "../../../../context/task/task-context";
import { TaskDetailType } from "../../../../types/modal";

export const Title: FC<TaskDetailType> = ({ task }) => {
  const { taskUpdate } = useContext(TaskContext);

  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const handleKeyEvent = (e: any) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  };
  const handleSaveTitle = (e: FocusEvent<HTMLInputElement>) => {
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
          onBlur={handleSaveTitle}
        />
      </div>
    </div>
  );
};
