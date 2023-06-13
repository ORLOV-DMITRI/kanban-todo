import { FC, useContext } from "react";
import "./column.css";
import { ColumnType } from "../../../types/todo/todo";
import { Status } from "../status/status";
import { TaskType } from "../../../types/global";
import { TaskContext } from "../../../context/task/task-context";
import { Card } from "../card/card";
import { AddButton } from "../add-button/add-button";

export const Column: FC<ColumnType> = ({ status, onModalOpen }) => {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task: TaskType) => {
    if (task.status === status) {
      return task;
    }
  });
  return (
    <div className="todo__column">
      <Status status={status} tasks={filteredTasks} />
      <ul className="todo__lists">
        {filteredTasks.map((task: TaskType) => (
          <li key={task.id}>
            <Card task={task} onModalOpen={onModalOpen} />
          </li>
        ))}
      </ul>
      <AddButton status={status} />
    </div>
  );
};
