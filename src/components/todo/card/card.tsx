import { useState, FC, useContext, MouseEvent } from "react";
import "./card.css";
import { CardType } from "../../../types/todo/todo";
import { TaskContext } from "../../../context/task/task-context";
import { ICONS } from "../../../constants/icons";

export const Card: FC<CardType> = ({ task, onOpenModal }) => {
  const { taskDelete, taskUpdate } = useContext(TaskContext);

  const [hasDeleteIcon, setHasDeleteIcon] = useState<boolean>(false);

  const handleIconDisplay = () => {
    setHasDeleteIcon(!hasDeleteIcon);
  };
  const handleTaskDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    taskDelete(task.id);
  };
  const handleModalOpen = () => {
    onOpenModal(true);
    task.isActive = true;
    taskUpdate(task);
  };

  const showCommentsCount = () => {
    const hasComments: boolean = task.comments.length > 0;
    if (hasComments) {
      return (
        <span>
          {ICONS.comment()} <span>{task.comments.length}</span>
        </span>
      );
    }
  };
  const showDeleteIcon = () => {
    if (hasDeleteIcon) {
      return <button onClick={handleTaskDelete}>{ICONS.delete()}</button>;
    }
  };

  return (
    <div
      className="todo__card"
      onMouseEnter={handleIconDisplay}
      onMouseLeave={handleIconDisplay}
      onClick={handleModalOpen}
    >
      <div className="todo__card-info">
        <p className="todo__title">{task.title}</p>
        {showDeleteIcon()}
      </div>
      {showCommentsCount()}
    </div>
  );
};
