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
import { AuthorContext } from "../../../context/author/author-context";
import { ICONS } from "../../../constants/icons";

export const AddTaskForm: FC<AddTaskFormType> = ({ status, onSetIsOpen }) => {
  const { taskAdd } = useContext(TaskContext);
  const { author } = useContext(AuthorContext);

  const [title, setTitle] = useState<string>("");

  const handleChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmitForm = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();

    if (title.trim() === "") return;

    const newTask: TaskType = {
      id: v1(),
      title: title.trim(),
      description: "",
      comments: [],
      status: status,
      author: author,
    };

    taskAdd(newTask);

    setTitle("");
    onSetIsOpen();
  };
  //   const focusTextAreaHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
  //     e.target.focus();
  //   };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      handleSubmitForm(e);
    }
    if (e.altKey && e.code === "Enter") {
      handleSubmitForm(e);
    }
    if (e.code === "Escape") {
      onSetIsOpen();
    }
  };

  return (
    <form className="form">
      <div className="form__input">
        <textarea
          value={title}
          onChange={handleChangeTitle}
          onKeyDown={handleKeyDown}
          // onBlur={onSetIsOpen}
          autoFocus
          placeholder="Введите заголовок для этой карточки"
        ></textarea>
      </div>
      <div className="form__btn">
        <input
          type="submit"
          value="Добавить карточку"
          onClick={handleSubmitForm}
        />
        <button onClick={onSetIsOpen}>{ICONS.delete()}</button>
      </div>
    </form>
  );
};
