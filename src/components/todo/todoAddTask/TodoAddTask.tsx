import { FC } from "react";
import "./TodoAddTask.css";
import { useState, MouseEvent } from "react";
import AddTaskForm from "../todoAddTaskForm/TodoAddTaskForm";
import { TodoAddTaskType } from "../../../@types/todoType";

const TodoAddTask: FC<TodoAddTaskType> = ({ status }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openNewTaskHandler = (e: MouseEvent) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  if (isOpen) {
    return (
      <button className="todo__btn-add" onClick={openNewTaskHandler}>
        <span className="todo__btn-icon">&#43;</span>
        <span>Добавить карточку</span>
      </button>
    );
  }

  return <AddTaskForm status={status} onSetIsOpen={openNewTaskHandler} />;
};
export default TodoAddTask;
