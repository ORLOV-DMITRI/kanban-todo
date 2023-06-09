import { useState, FC, useContext, MouseEvent } from "react";
import "./card.css";
import { CardType } from "../../../types/todo";
import { TaskContext } from "../../../context/task/task-context";
import { TaskContextType } from "../../../types/global";
import { ICONS } from "../../../constants/icons";

export const Card: FC<CardType> = ({ task, onOpenModal }) => {
  const { taskDelete } = useContext(TaskContext) as TaskContextType;

  const [isDeleteIconVisible, setIsDeleteIconVisible] =
    useState<boolean>(false);

  const handleIconDisplay = () => {
    setIsDeleteIconVisible((prevDeleteIconVisible) => !prevDeleteIconVisible);
  };
  const handleTaskDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    taskDelete(task.id);
  };
  const handleModalOpen = () => {
    onOpenModal(true);
  };

  const commentCount = () => {
    return (
      <span>
        {ICONS.comment()} <span>{task.comment.length}</span>
      </span>
    );
  };
  const deleteIcon = () => {
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
        {isDeleteIconVisible && deleteIcon()}
      </div>
      {task.comment.length > 0 && commentCount()}
    </div>
  );
};
