import { useState, FC, useContext, MouseEvent } from "react";
import "./card.css";
import { CardType } from "../../../types/todo/todo";
import { TaskContext } from "../../../context/task/task-context";
import { ICONS } from "../../../constants/icons";

export const Card: FC<CardType> = ({ task, onModalOpen }) => {
  const { taskDelete, taskUpdate } = useContext(TaskContext);

  const [isDeleteIconVisible, setIsDeleteIconVisible] =
    useState<boolean>(false);

  const handleIconDisplay = () => {
    setIsDeleteIconVisible(!isDeleteIconVisible);
  };
  const handleTaskDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    taskDelete(task.id);
  };
  const handleModalOpen = () => {
    onModalOpen(true);
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
    return <button onClick={handleTaskDelete}>{ICONS.delete()}</button>;
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
        {isDeleteIconVisible && showDeleteIcon()}
      </div>
      {showCommentsCount()}
    </div>
  );
};
