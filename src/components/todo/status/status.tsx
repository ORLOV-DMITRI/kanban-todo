import { useState, FocusEvent, FC, useContext } from "react";
import "./status.css";
import { StatusType } from "../../../types/todo";
import { StatusContext } from "../../../context/status/status-context";
import { TaskContext } from "../../../context/task/task-context";

export const Status: FC<StatusType> = ({ status, tasks }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const { statusChange } = useContext(StatusContext);
  const { taskUpdate } = useContext(TaskContext);

  const handleTextSelect = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const saveChangeHandler = (e: any) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  };

  const saveStatusHandler = (e: FocusEvent<HTMLInputElement>) => {
    const newStatus = e.target.value.toUpperCase();
    console.log(newStatus);
    const prevStatus = currentStatus;

    statusChange({ newStatus, prevStatus });

    tasks.map((task) => {
      task.status = newStatus;
      taskUpdate(task);
    });
    setCurrentStatus(newStatus);
  };

  return (
    <div className="todo__status">
      <input
        type="text"
        defaultValue={currentStatus}
        onFocus={handleTextSelect}
        onKeyDown={saveChangeHandler}
        onBlur={saveStatusHandler}
      />
    </div>
  );
};
