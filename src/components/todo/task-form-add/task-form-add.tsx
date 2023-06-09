import {
  useState,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useContext,
} from "react";
import { FC } from "react";
import { TaskType } from "../../../types/global";
import { AddTaskFormType } from "../../../types/todo";
import { TaskContext } from "../../../context/task/task-context";
import { v1 } from "uuid";
import "./task-form-add.css";

export const AddTaskForm: FC<AddTaskFormType> = ({ status, onSetIsOpen }) => {
  const { taskAdd } = useContext(TaskContext);

  const [taskTitle, setTaskTitle] = useState<string>("");

  const titleTaskChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskTitle(e.target.value);
  };
  const submitHandler = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();

    if (taskTitle.trim() === "") return;

    const newTask: TaskType = {
      id: v1(),
      title: taskTitle.trim(),
      description: "",
      comment: [],
      status: status,
      author: "Dimas",
    };

    taskAdd(newTask);

    setTaskTitle("");
    onSetIsOpen();
  };
  //   const focusTextAreaHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
  //     e.target.focus();
  //   };
  const keyDownSubmitHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      submitHandler(e);
    }
    if (e.altKey && e.code === "Enter") {
      submitHandler(e);
    }
    if (e.code === "Escape") {
      onSetIsOpen();
    }
  };

  return (
    <form className="form">
      <div className="form__input">
        <textarea
          value={taskTitle}
          onChange={titleTaskChangeHandler}
          onKeyDown={keyDownSubmitHandler}
          autoFocus
          placeholder="Введите заголовок для этой карточки"
        ></textarea>
      </div>
      <div className="form__btn">
        <input
          type="submit"
          value="Добавить карточку"
          onClick={submitHandler}
        />
        <button onClick={onSetIsOpen}>&times;</button>
      </div>
    </form>
  );
};
