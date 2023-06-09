import { FC } from "react";
import "./task-add.css";
import { useState } from "react";
import { AddTaskForm } from "../task-form-add/task-form-add";
import { AddTaskType } from "../../../types/todo";

export const AddTask: FC<AddTaskType> = ({ status }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(true);

  const handleFormDisplay = () => {
    setIsOpenForm((prevValue) => !prevValue);
  };

  if (isOpenForm) {
    return (
      <button className="todo__btn-add" onClick={handleFormDisplay}>
        <span className="todo__btn-icon">+</span>
        <span>Добавить карточку</span>
      </button>
    );
  }

  return <AddTaskForm status={status} onSetIsOpen={handleFormDisplay} />;
};
