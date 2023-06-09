import { FC, useContext } from "react";
import "./column.css";
import { ColumnType } from "../../../types/todo";
import { Status } from "../status/status";
import { TaskType } from "../../../types/global";
import { TaskContext } from "../../../context/task/task-context";
import { Card } from "../card/card";
import { AddTask } from "../task-add/task-add";

export const Column: FC<ColumnType> = ({ status, onOpenModal }) => {
  const { tasks } = useContext(TaskContext);
  const filteredTaskByStatus = tasks.filter((task: TaskType) => {
    if (task.status === status) {
      return task;
    }
  });
  return (
    <div className="todo__column">
      <Status status={status} tasks={filteredTaskByStatus} />
      <ul className="todo__lists">
        {filteredTaskByStatus.map((task: TaskType) => (
          <li key={task.id}>
            <Card task={task} onOpenModal={onOpenModal} />
          </li>
        ))}
      </ul>
      <AddTask status={status} />
    </div>
  );
};
