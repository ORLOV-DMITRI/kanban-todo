import {
  useState,
  FocusEvent,
  KeyboardEventHandler,
  FC,
  useContext,
} from "react";
import "./TodoStatus.css";
import { TodoStatusType } from "../../../@types/todoType";
import { StatusContext } from "../../../context/StatusContext";
import {
  ITask,
  StatusContextType,
  TaskContextType,
} from "../../../@types/globalType";
import { TaskContext } from "../../../context/TaskContext";

const TodoStatus: FC<TodoStatusType> = ({ status, tasks }) => {
  const [currentStatus, setStatus] = useState(status);

  const { changeStatus } = useContext(StatusContext) as StatusContextType;
  const { editTask } = useContext(TaskContext) as TaskContextType;

  const selectTextHandler = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();
  const saveChangeHandler = (e: any) => {
    ///ПОчему не встает KeyboardEvent<HTMLInputElement>????
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  };
  const saveStatusHandler = (e: FocusEvent<HTMLInputElement>) => {
    const newStatus = e.target.value;
    changeStatus(newStatus, currentStatus);

    console.log(tasks);
    console.log(newStatus);
    console.log(currentStatus);
    tasks.map((task) => {
      const newTask: ITask = {
        id: task.id,
        title: task.title,
        description: "",
        comment: [],
        commentCount: 0,
        status: currentStatus,
        author: "",
      };
      editTask(task);
    });
    setStatus(newStatus);
  };

  return (
    <div className="todo__status">
      <input
        type="text"
        defaultValue={currentStatus}
        onFocus={selectTextHandler}
        onKeyDown={saveChangeHandler}
        onBlur={saveStatusHandler}
      />
    </div>
  );
};
export default TodoStatus;
