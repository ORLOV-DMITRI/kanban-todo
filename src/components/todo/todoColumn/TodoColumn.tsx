import { FC, useContext } from "react";
import "./TodoColumn.css";
import { TodoColumnType } from "../../../@types/todoType";
import TodoStatus from "../todoStatus/TodoStatus";
import { ITask, TaskContextType } from "../../../@types/globalType";
import { TaskContext } from "../../../context/TaskContext";
import TodoCard from "../todoCard/TodoCatd";
import TodoAddTask from "../todoAddTask/TodoAddTask";

const TodoColumn: FC<TodoColumnType> = ({ status }) => {
  const { tasks } = useContext(TaskContext) as TaskContextType;

  const filteredTaskByStatus = tasks.filter((task: ITask) => {
    if (task.status === status) {
      return task;
    }
  });
  return (
    <div className="todo__column">
      <TodoStatus status={status} tasks={filteredTaskByStatus} />
      <ul className="todo__lists">
        {filteredTaskByStatus.map((task: ITask) => (
          <li key={task.id}>
            <TodoCard task={task} />
          </li>
        ))}
      </ul>
      <TodoAddTask status={status} />
    </div>
  );
};
export default TodoColumn;
