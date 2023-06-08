import { useState, FC, useContext } from "react";
import "./TodoCard.css";
import { TodoCardType } from "../../../@types/todoType";
import { TaskContext } from "../../../context/TaskContext";
import { TaskContextType } from "../../../@types/globalType";

const TodoCard: FC<TodoCardType> = ({ task }) => {
  const { removeTask } = useContext(TaskContext) as TaskContextType;

  const [isDeletIconVisible, setIsDeletIconVisible] = useState<boolean>(false);

  const displayDeletIcon = () => {
    setIsDeletIconVisible((prevDeletIconVisible) => !prevDeletIconVisible);
  };
  const removeTaskHandler = () => {
    removeTask(task.id);
  };
  //   const displayCardModalHandler = () => {
  //     displayCardModal(task.id);
  //     openCardModal(true);
  //   };

  let btnRemoveTask;
  if (isDeletIconVisible) {
    btnRemoveTask = <button onClick={removeTaskHandler}>&times;</button>;
  }
  let commentIcon;
  if (task.commentCount > 0) {
    commentIcon = (
      <span>
        &#9993; <span>{task.commentCount}</span>
      </span>
    );
  }

  return (
    <div
      className="todo__card"
      onMouseEnter={displayDeletIcon}
      onMouseLeave={displayDeletIcon}
    >
      <div className="todo__card-info">
        <p className="todo__title">{task.title}</p>
        {btnRemoveTask}
      </div>
      {commentIcon}
    </div>
  );
};
export default TodoCard;
