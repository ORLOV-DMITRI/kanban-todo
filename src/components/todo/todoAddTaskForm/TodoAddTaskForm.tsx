import {
  useState,
  ChangeEvent,
  MouseEvent,
  FocusEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useContext,
} from "react";
import { FC } from "react";
import { ITask, TaskContextType } from "../../../@types/globalType";
import { uIdTask } from "../../../global/uniqueID";
import { TodoAddTaskFormType } from "../../../@types/todoType";
import { TaskContext } from "../../../context/TaskContext";

const TodoAddTaskForm: FC<TodoAddTaskFormType> = ({ status, onSetIsOpen }) => {
  const { addTask } = useContext(TaskContext) as TaskContextType;

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const titleTaskChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTaskTitle(e.target.value);
  };
  const submitHandler = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();

    if (newTaskTitle.trim() === "") return;

    const newTask: ITask = {
      id: uIdTask(),
      title: newTaskTitle,
      description: "",
      comment: [],
      commentCount: 0,
      status: status,
      author: "Dimas",
    };

    addTask(newTask);

    setNewTaskTitle("");
    onSetIsOpen(e);
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
      onSetIsOpen(e);
    }
  };

  return (
    <form>
      <div>
        <textarea
          value={newTaskTitle}
          onChange={titleTaskChangeHandler}
          onKeyDown={keyDownSubmitHandler}
          autoFocus
          placeholder="Введите заголовок для этой карточки"
        ></textarea>
      </div>
      <div>
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
export default TodoAddTaskForm;
