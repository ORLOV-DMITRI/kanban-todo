import {
  useState,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useContext,
} from "react";
import { FC } from "react";
import { TaskType } from "../../../types/global";
import { FormAddTaskType } from "../../../types/todo/todo";
import { TaskContext } from "../../../context/task/task-context";
import { v1 } from "uuid";
import "./form-add.css";
import { AuthorContext } from "../../../context/author/author-context";
import { ICONS } from "../../../constants/icons";

export const FormAdd: FC<FormAddTaskType> = ({ status, onCloseForm }) => {
  const { taskAdd } = useContext(TaskContext);
  const { author } = useContext(AuthorContext);

  const [title, setTitle] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const handleSave = (e: MouseEvent | KeyboardEvent) => {
    const newTitle: string = title.trim();

    if (newTitle === "") return;

    const newTask: TaskType = {
      id: v1(),
      title: newTitle,
      description: "",
      comments: [],
      status: status,
      author: author,
    };

    taskAdd(newTask);

    setTitle("");
    onCloseForm();
  };

  const handleKeyEvent = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      handleSave(e);
    }
    if (e.altKey && e.code === "Enter") {
      handleSave(e);
    }
    if (e.code === "Escape") {
      onCloseForm();
    }
  };

  return (
    <div className="form">
      <div className="form__input">
        <textarea
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyEvent}
          autoFocus
          placeholder="Введите заголовок для этой карточки"
        ></textarea>
      </div>
      <div className="form__btn">
        <input type="submit" value="Добавить карточку" onClick={handleSave} />
        <button onClick={onCloseForm}>{ICONS.delete()}</button>
      </div>
    </div>
  );
};
