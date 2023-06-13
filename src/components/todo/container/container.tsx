import { FC, useContext } from "react";
import "./container.css";
import { StatusContext } from "../../../context/status/status-context";
import { Column } from "../column/column";
import { ContainerType } from "../../../types/todo/todo";

export const Container: FC<ContainerType> = ({ onOpenModal }) => {
  const { statuses } = useContext(StatusContext);

  return (
    <div className="todo">
      {statuses.map((status: string) => {
        return (
          <Column key={status} status={status} onOpenModal={onOpenModal} />
        );
      })}
    </div>
  );
};
